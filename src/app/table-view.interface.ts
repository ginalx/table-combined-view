export interface TableView {
  albumTitle: string;
  username: string;
  city: string;
  email: string;
}

export interface TableColumn {
  field: keyof TableView;
  header: string;
}
