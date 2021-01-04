import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Note {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly owner?: string;
  readonly editors?: (string | null)[];
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}