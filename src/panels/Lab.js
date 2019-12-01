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
      <a name="top"> </a>
      <Group title="Технологии передачи сигналов">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t3">3</a>
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

      <br></br>
      <Group title="Технологии передачи сигналов">
        <Div>
          <p>
            <a name="t1" style={{ color: "red" }}>
              1. Классификация сетевых технологий
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных
            Технологии мультиплексирования – повышение использования сетевых
            ресурсов Технологии коммутации – организация совместного
            использования отправителями групповых сетевых ресурсов, образованных
            в результате мультиплексирования ЧЕРЕЗ ЭЛЕКТРОМАГНИТНОЕ
            ВЗАИМОДЕЙСТВИЕ
          </p>
          <br></br>
          <p>
            <a name="t2" style={{ color: "red" }}>
              2. Информация и ее основные элементы
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования. Виды информации по её форме представления, способам
            её кодирования и хранения, что имеет наибольшее значение для
            информатики, это: • графическая или изобразительная • звуковая
            (акустическая) • текстовая • числовая • видеоинформация •
            Объективность информации. • Достоверность информации. • Полнота
            информации. • Точность информации • Актуальность информации •
            Полезность (ценность) информации
          </p>
          <br></br>
          <p>
            <a name="t3" style={{ color: "red" }}>
              3. Модель информационного взаимодействия людей
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
        </Div>
      </Group>

      <br></br>

      <Button size="xl" style={{ display: "flex" }}>
        <a href="#top">Наверх</a>
      </Button>
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
