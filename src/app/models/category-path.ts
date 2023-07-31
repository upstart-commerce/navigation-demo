export interface CategoryPath {
  resolved:   string;
  isHomePath: boolean;
  entity:     Entity;
  label:      string;
  jsonapi:    Jsonapi;
  meta:       Meta;
}

export interface Entity {
  canonical: string;
  type:      string;
  bundle:    string;
  id:        string;
  uuid:      string;
}

export interface Jsonapi {
  individual:   string;
  resourceName: string;
  pathPrefix:   string;
  basePath:     string;
  entryPoint:   string;
}

export interface Meta {
  deprecated: Deprecated;
}

export interface Deprecated {
  "jsonapi.pathPrefix": string;
}
