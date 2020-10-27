import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Label, Icon, Image, Menu } from "semantic-ui-react";
import { useApi } from "../auth/useApi";

const LOGO_URL =
  "/static/screenplay/assets/netflix-security-dark-bg-tight.5f1eba5edb.svg";

const ConsoleMeSidebar = (props) => {
  const { loading, data, error } = useApi("/api/v1/siteconfig");

  if (loading || !data) {
    return null;
  }

  const {
    consoleme_logo,
    documentation_url,
    support_contact,
    support_slack,
  } = data;

  return (
    <Menu
      color="black"
      fixed="left"
      inverted
      vertical
      style={{
        paddingTop: "10px",
        width: "240px",
        marginTop: "72px",
        minHeight: "700px",
      }}
    >
      <Menu.Item>
        <Label>{props.recentRoles.length}</Label>
        <Menu.Header>Recent Roles</Menu.Header>
        <Menu.Menu>
          {props.recentRoles.map((role) => {
            return (
              <Menu.Item as="a" name={role} key={role}>
                {role}
              </Menu.Item>
            );
          })}
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Help</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            as="a"
            name="documentation"
            href={documentation_url || ""}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="file" />
            Documenation
          </Menu.Item>
          <Menu.Item
            as="a"
            name="email"
            href={support_contact ? "mailto:" + support_contact : "/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="send" />
            Email us
          </Menu.Item>
          <Menu.Item
            as="a"
            name="slack"
            href={support_slack || "/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="slack" />
            Find us on Slack
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Menu
        style={{
          position: "absolute",
          bottom: "70px",
          left: "0",
        }}
      >
        <Menu.Item>
          <Image size="medium" src="/static_ui/images/logos/quarantine/1.png" />
          <br />
          <Image
            size="medium"
            src="/static_ui/images/netflix-security-dark-bg-tight.svg"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default ConsoleMeSidebar;