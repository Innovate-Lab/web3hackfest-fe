import IconEffect from "@/components/icon/IconEffect";
import React from "react";

const SidebarIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        position: "fixed",
        height: "100px",
        width: "50px",
        right: 30,
        top: 600,
      }}
      className="z-[99]"
    >
      {/* Link tới trang Zalo */}
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
        <IconEffect src="/icon/zalo.png" alt="Zalo" />
      </a>

      {/* Link tới trang Messenger */}
      <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
        <IconEffect src="/icon/messenger.png" alt="Messenger" />
      </a>
    </div>
  );
};

export default SidebarIcon;
