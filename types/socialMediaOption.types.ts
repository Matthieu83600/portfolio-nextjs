export type SocialMediaOption = {
  id: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  title: string;
  url: string;
};
