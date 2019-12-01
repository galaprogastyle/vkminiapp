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
            <a href="#t4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t10">10</a>
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
          <br></br>
          <p>
            <a name="t4" style={{ color: "red" }}>
              4. Принцип передачи сигналов электросвязи. Электромагнитный
              спектр.
            </a>
            <br></br>
            Сигнал электросвязи – это электромагнитное колебание, при помощи
            которого сообщения передаются от источника к получателю по каналу
            связи. В качестве сигналов могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др. Для преобразования
            сообщения в сигнал независимыми устройствами должны быть реализованы
            3 операции: 1) Преобразование – восстановление 2) Модуляция –
            демодуляция 3) Кодирование – декодирование Электромагни́тный спектр —
            совокупность всех диапазонов частот электромагнитного излучения
          </p>
          <br></br>
          <p>
            <a name="t5" style={{ color: "red" }}>
              5. Скорость распространения сигналов электросвязи
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Процент от скорости света в вакууме: Для витой пары -80% Для
            коаксиальных кабелей – 90% В оптоволокне V=c/n n -коэф преломления
          </p>

          <br></br>
          <p>
            <a name="t6" style={{ color: "red" }}>
              6. Характеристики процесса передачи сигналов
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="t7" style={{ color: "red" }}>
              7. Информационные обьекты процесса информационного взаимодействия
            </a>
            <br></br>
            Сообщения - кодовая последовательность знаков языка Данные -
            обобщенное обозначение для любой информации Сигнал – данные, имеющие
            физическую форму, обеспечивающие перемещение от отправителя к
            получателю по физической среде взаимодействия. Сигнал – переносчик
            сообщения в физ среде.
          </p>

          <br></br>
          <p>
            <a name="t8" style={{ color: "red" }}>
              8. Обобщенная модель процесса информационного взаимодействия людей
              и ее элементы.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="t9" style={{ color: "red" }}>
              9. Примеры процессов информационного взаимодействия людей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t10" style={{ color: "red" }}>
              10. Основные понятия процесса передачи сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t11" style={{ color: "red" }}>
              11. Сообщение и языки их представления
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t12" style={{ color: "red" }}>
              12. Сообщение в теории информации
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t13" style={{ color: "red" }}>
              13. Сигнал электросвязи
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t14" style={{ color: "red" }}>
              14. Классификация и технические характеристики сигналов
              электросвязи
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t15" style={{ color: "red" }}>
              15. Ширина спектра и скорость передачи сигналов
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t16" style={{ color: "red" }}>
              16. Спектральное представление сигналов
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t17" style={{ color: "red" }}>
              17. Операции преобразования / восстановления сообщений
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t18" style={{ color: "red" }}>
              18. Исторически значимые изобретения для преобразования сигналов
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t19" style={{ color: "red" }}>
              19. Преобразование сигналов радиосвязи
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t20" style={{ color: "red" }}>
              20. Электрооптические преобразования сигналов
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t21" style={{ color: "red" }}>
              21. Операции модуляции и демодуляции
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>

      <br></br>
      <Button> </Button>
      <Button
        size="xl"
        style={{ position: "fixed", left: "0", bottom: "0", zIndex: "124" }}
      >
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
