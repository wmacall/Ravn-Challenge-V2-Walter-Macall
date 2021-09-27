export interface IPersonCellProps {
  title: string | null;
  description: string | null;
  id: string;
  onPress: (id: string) => void;
}
