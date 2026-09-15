# MODULE 1: ARCHITECTURAL PARADIGM SHIFT & TYPE MAPPING

## 1. ID Translation Strategy: `ObjectId` to `UUIDv4`
MongoDB uses 12-byte `ObjectId` generated on the client or server sequentially. PostgreSQL relies heavily on 128-bit `UUIDv4` for security, uniqueness, and distributed generation (crucial for Supabase).

### Mapping Approach:
- **New Primary Keys**: We will establish native `uuid` columns mapped to `gen_random_uuid()` as the primary keys in PostgreSQL for core entities (e.g., `leads`, `inquiries`).
- **Legacy ID Preservation**: To maintain relational integrity during the migration and enable idempotency, a unique indexed column `legacy_mongo_id` (Type: `VARCHAR(24) UNIQUE`) will be temporarily added to our target tables. 
- **Relational Integrity**: As we migrate child documents (e.g., extracting an "Inquiry" out of a "Lead"), we will keep a memory dictionary (`Map<string, string>`) during the ETL process correlating `mongo._id` to `postgres.id`. This memory map dictates how foreign keys are reconstructed in the relational plane.

## 2. Denormalization to Normalization Strategy
Our MongoDB structure heavily nested inquiries and contact histories directly inside the "Lead" profile. In our Relational Shift, we establish strict domains:

- **Entity 1: `leads` (The Parent)**
  - Stores fixed PII and core demographic data (First Name, Last Name, Email, Phone, Company Size). 
  - Represents the 1 in our 1:N relationship.
- **Entity 2: `inquiries` (The Child)**
  - Extracted from embedded arrays in Mongo (`lead.requests` or `lead.contacts`).
  - Represents the N in our 1:N relationship.
  - Holds specific transactional intent (e.g., Form Submission, Callback Request, Problem Summary, Preferred Time).
  - Explicit Foreign Key: `lead_id` referencing `leads.id` with `ON DELETE CASCADE`.

## 3. Hybrid Schema Architecture
While we are moving to a strict relational model, we need elasticity for tracking unpredictable telemetry and varied UTM parameters inherently dynamic in marketing tracking.

- **Implementation**: We leverage PostgreSQL `JSONB` for an `utm_metadata` and `raw_submission_data` column on the `inquiries` table. 
- **Indexing**: A GIN index (`CREATE INDEX idx_inquiries_utm on inquiries USING GIN (utm_metadata);`) ensures we can quickly run query lookups (e.g., find all inquiries driven by a specific ad campaign) without polluting our core DDL with hundreds of sparse tracking columns.
