import { NetworkPostProps } from ".";

export interface PostManagerProps extends Partial<NetworkPostProps> {
  className?: string;
  onSave?: () => void;
}
