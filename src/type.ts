export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  document: string;
  document_type: string;
  birthdate: string;
  cellphone: string;
  photo: string;
  address: string;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
  people_known: unknown[];
  people_you_may_unknown: unknown[];
}

export interface ChatMessage {
  from: 'user' | 'customer';
  content: string;
  timestamp: string;
}

export interface Chat {
  id: number;
  messages: ChatMessage[];
}
