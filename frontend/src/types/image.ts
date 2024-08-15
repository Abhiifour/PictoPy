export interface Image {
  title: string;
  src: string;
  tags: string[];
}

export interface APIResponse {
  data: {
    [key: string]: string[];
  };
}
