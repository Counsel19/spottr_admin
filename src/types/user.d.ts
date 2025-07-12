interface IAdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  permission: string;
  lastLogin: string;
  status: "online" | "offline";
  avatar: string;
}