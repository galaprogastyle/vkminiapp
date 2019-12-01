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
        Ответы по темам
      </PanelHeader>
      <Group title="Технологии передачи сигналов">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            21
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            22
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            23
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            24
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            25
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            26
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            27
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            28
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            29
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            30
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            31
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            32
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            33
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            34
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            35
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            36
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            37
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            38
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            39
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            40
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            41
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            42
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии мультиплексирования">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            21
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            22
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            23
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            24
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии коммутации">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            21
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            22
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            23
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            24
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            25
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            26
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            27
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            28
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            29
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            30
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            31
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            32
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            33
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            34
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            35
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Основы интернета вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Идентификация в интернете вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Всепроникающие/ Особенности сетей / Сенсорные сети">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Эталонные модели интернета вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Всепроникающие/ Протоколы">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            21
          </Button>
        </Div>
      </Group>

      <br></br>
      <Group title="Всепроникающие/ Технологии">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            1
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            2
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            3
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            4
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            5
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            6
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            7
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            8
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            9
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            10
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            11
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            12
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            13
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            14
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            15
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            16
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            17
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            18
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            19
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            20
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            21
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
