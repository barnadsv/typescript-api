// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "jobs",
    columns: [
      { name: "company", type: "string" },
      { name: "title", type: "string" },
      { name: "jobLink", type: "string" },
      { name: "geography", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Jobs = InferredTypes["jobs"];
export type JobsRecord = Jobs & XataRecord;

export type DatabaseSchema = {
  jobs: JobsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Leonardo-de-Araujo-Barnab-s-workspace-7bgpqi.us-east-1.xata.sh/db/job-board",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};