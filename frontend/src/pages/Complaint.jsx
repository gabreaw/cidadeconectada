import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";
import ComplaintFeed from "../components/ComplaintFeed/ComplaintFeed";
import ResolvedComplaints from "../components/ResolvedComplaints/ResolvedComplaints";
import React from "react";

export default function Complaint() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <ComplaintFeed />
        <ResolvedComplaints />
      </div>
    </>
  );
}
