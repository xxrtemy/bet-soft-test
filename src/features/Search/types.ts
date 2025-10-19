export interface SearchProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}
