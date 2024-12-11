export type MenuOption = {
  id: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  name: string;
  url: string;
};
