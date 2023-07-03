
export namespace OPENAIProxy{
  export interface OpenAIResp {
    id: string;
    completions: Completion[];
    created: Date;
    createdUnixTime: number;
    model: Model;
    object: string;
    organization: string;
    processingTime: string;
    requestId: string;
    openaiVersion: Date;
  }


  export interface Completion {
    text: string;
    index: number;
    logprobs: null;
    finishReason: string;
  }

  export interface Model {
    modelID: string;
    ownedBy: null;
    object: null;
    created: null;
    createdUnixTime: null;
    permission: any[];
    root: null;
    parent: null;
  }

  export interface ConversationResponse {
    message: ConversationMessage[] ;
  }

  export interface ConversationMessage {
    role: ConversationRole;
    content: string;
  }

  export enum ConversationRole {
    User = 0,
    Assistant = 1,
    System = 2,
  }
}
