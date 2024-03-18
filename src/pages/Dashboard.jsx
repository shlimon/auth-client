import { Avatar, Button, Card, Flex } from "antd";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <Card>
      <Flex>
        <Avatar size={150} />
      </Flex>
      <Button onClick={handleLogout}>Logout</Button>
    </Card>
  );
};

export default Dashboard;
