import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./style.css";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { platform, IOS } from "@vkontakte/vkui";

const osName = platform();
const Lab = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </HeaderButton>
        }
      >
        Технологии интернета вещей
      </PanelHeader>
      <Group title="Технологии передачи сигналов">
        <Div style={{ display: "flex" }}>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            1
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            2
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            3
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            4
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            1
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            6
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            7
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            8
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            9
          </Button>
          <Button size="l" stretched style={{ marginRight: 1 }}>
            10
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

Lab.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Lab;
