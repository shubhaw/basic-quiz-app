import * as React from "react";
import { Nav, INavLink } from "office-ui-fabric-react";

export const Sidebar: React.FC = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="home"
      selectedAriaLabel="Selected"
      ariaLabel="Nav basic example"
      styles={{
        root: {
          width: 208,
          height: '100vh',
          boxSizing: "border-box",
          border: "1px solid #eee",
          position: 'absolute',
          top: '0'
        }
      }}
      groups={[
        {
          links: [
            {
              name: "Home",
              url: "/",
              key: 'home',
              expandAriaLabel: "Expand Home section",
              collapseAriaLabel: "Collapse Home section",
              links: [
                {
                  name: "Item 1",
                  url: "https://tech-repainted.com",
                  key: "key1",
                  target: "_blank"
                },
                {
                  name: "Item 2",
                  url: "/",
                  disabled: true,
                  key: "key2",
                  target: "_blank"
                }
              ],
              isExpanded: true
            },
            {
              name: "Documents",
              url: "http://example.com",
              key: "key3",
              target: "_blank"
            },
            {
              name: "Pages",
              url: "http://msn.com",
              key: "key4",
              target: "_blank"
            }
          ]
        }
      ]}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement, MouseEvent>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}
