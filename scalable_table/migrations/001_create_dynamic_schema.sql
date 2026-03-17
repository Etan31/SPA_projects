create table entities(
    id BIGSERIAL PRIMARY KEY,
    name TEXT ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT  NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT  NOW()
)

CREATE TABLE attributes(
    id BIGSERIAL PRIMARY KEY,
    name TEXT  NOT NULL UNIQUE,
    data_type TEXT NOT NULL, 
    is_required BOOLEAN NOT NULL DEFAULT FALSE,
    meta JSONB DEFAULT '{}'
)

CREATE TABLE values (
  id BIGSERIAL PRIMARY KEY,
  entity_id BIGINT NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
  attribute_id BIGINT NOT NULL REFERENCES attributes(id) ON DELETE CASCADE,
  value JSONB,                     -- JSONB to allow mixed types
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (entity_id, attribute_id)
);

-- Indexes for performance
CREATE INDEX idx_values_entity ON values (entity_id);
CREATE INDEX idx_values_attribute ON values (attribute_id);
CREATE INDEX idx_attributes_name ON attributes (name);