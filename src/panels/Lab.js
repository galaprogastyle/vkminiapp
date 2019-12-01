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
            <a href="#t11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t24">24</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t25">25</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t26">26</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t27">27</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t28">28</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t29">29</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t30">30</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t31">31</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t32">32</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t33">33</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t34">34</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t35">35</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t36">36</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t37">37</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t38">38</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t39">39</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t40">40</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t41">41</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t42">42</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии мультиплексирования">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#m24">24</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Технологии коммутации">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k21">21</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k22">22</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k23">23</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k24">24</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k25">25</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k26">26</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k27">27</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k28">28</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k29">29</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k30">30</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k31">31</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k32">32</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k33">33</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k34">34</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#k35">35</a>
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
              1. Классификация сетевых технологий.
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
              2. Информация и ее основные элементы.
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
              3. Модель информационного взаимодействия людей.
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
              5. Скорость распространения сигналов электросвязи.
              Электромагнитный спектр.
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
              6. Общая схема системы связи. Характеристики процесса передачи
              сигналов.
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
              7. Информационные обьекты процесса информационного взаимодействия.
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
              11. Сообщение и языки их представления.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t12" style={{ color: "red" }}>
              12. Сообщение в теории информации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t13" style={{ color: "red" }}>
              13. Сигнал электросвязи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t14" style={{ color: "red" }}>
              14. Классификация и технические характеристики сигналов.
              электросвязи
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t15" style={{ color: "red" }}>
              15. Ширина спектра и скорость передачи сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t16" style={{ color: "red" }}>
              16. Спектральное представление сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t17" style={{ color: "red" }}>
              17. Операции преобразования / восстановления сообщений.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t18" style={{ color: "red" }}>
              18. Исторически значимые изобретения для преобразования сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t19" style={{ color: "red" }}>
              19. Преобразование сигналов радиосвязи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t20" style={{ color: "red" }}>
              20. Электрооптические преобразования сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t21" style={{ color: "red" }}>
              21. Операции модуляции и демодуляции.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
          <br></br>
          <p>
            <a name="t22" style={{ color: "red" }}>
              22. Аналоговая и импульсная модуляция сообщений.
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
            <a name="t23" style={{ color: "red" }}>
              23. Аналоговая частотная модуляция.
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
            <a name="t24" style={{ color: "red" }}>
              24. Аналоговая модуляция по амплитуде и фазе.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="t25" style={{ color: "red" }}>
              25. Импульсно-кодовая модуляция.
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
            <a name="t26" style={{ color: "red" }}>
              26. Структура кадра первичного потока ИКМ.
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
            <a name="t27" style={{ color: "red" }}>
              27. Оптическая модуляция.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="t28" style={{ color: "red" }}>
              28. Операции кодирования / декодирования.
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
            <a name="t29" style={{ color: "red" }}>
              29. Физическое кодирование цифровых сигналов.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="t30" style={{ color: "red" }}>
              30. Логическое кодирование цифровых сигналов. Исключение длинных
              последовательностей одинаковых по значению бит при помощи
              избыточных кодов или скрэмблирования.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t31" style={{ color: "red" }}>
              31. Логическое кодирование цифровых сигналов. Помехоустойчивое
              кодирование. Обеспечение конфиденциальности.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t32" style={{ color: "red" }}>
              32. Пример системы логического кодирования данных в стандарте
              IS-95.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t33" style={{ color: "red" }}>
              33. Сравнение аналоговых и дискретных сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t34" style={{ color: "red" }}>
              34. Сравнение аналоговых и дискретных каналов связи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t35" style={{ color: "red" }}>
              35. Информационные характеристики сигналов и их связь с
              физическими характеристиками.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t36" style={{ color: "red" }}>
              36. Информационный объем сигнала при распространении и сохранении
              данных.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t37" style={{ color: "red" }}>
              37. Информационный объем канала.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t38" style={{ color: "red" }}>
              38. Алгоритмический объем сигнала и пиковая производительность
              процессора.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t39" style={{ color: "red" }}>
              39. Что такое линия связи? Характеристики и классификация линий
              связи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t40" style={{ color: "red" }}>
              40. Особенности медных кабелей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t41" style={{ color: "red" }}>
              41. Особенности волоконно-оптических кабелей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="t42" style={{ color: "red" }}>
              42. Особенности линий радиосвязи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>

      <br></br>
      <Group title="Технологии мультиплексирования">
        <Div>
          <p>
            <a name="m1" style={{ color: "red" }}>
              1. Классификация сетевых технологий. Технологии
              мультиплексирования.
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
            <a name="m2" style={{ color: "red" }}>
              2. Модель процесса мультиплексирования. Мультиплексор,
              демультиплексор, канал связи.
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
            <a name="m3" style={{ color: "red" }}>
              3. Иерархическая структура процесса мультиплексирования.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="m4" style={{ color: "red" }}>
              4. Классификация технологий образования каналов при
              мультиплексировании.
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
            <a name="m5" style={{ color: "red" }}>
              5. Принцип частотного мультиплексирования.
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
            <a name="m6" style={{ color: "red" }}>
              6. Частотное мультиплексирование на аналоговой сети.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="m7" style={{ color: "red" }}>
              7. Частотное мультиплексирование в технологии ADSL.
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
            <a name="m8" style={{ color: "red" }}>
              8. Частотное разделение сигналов абонентской сигнализации.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="m9" style={{ color: "red" }}>
              9. Мультиплексирование по длине волны.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m10" style={{ color: "red" }}>
              10. Перспективы мультиплексирования ВОЛС.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m11" style={{ color: "red" }}>
              11. Принцип временного мультиплексирования.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m12" style={{ color: "red" }}>
              12. Структура первичного потока ИКМ.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m13" style={{ color: "red" }}>
              13. Временное мультиплексирование и проблема синхронизации.
              Классификация типов синхронизации в сетях связи.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m14" style={{ color: "red" }}>
              14. Основные понятия систем синхронизации сетей: Синхронная сеть,
              проскальзывание, фазовые дрожания, первичный эталонный источник,
              первичный эталонный генератор, ведомый задающий генератор,
              иерархическая синхронизированная сеть.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m15" style={{ color: "red" }}>
              15. Синхронизация сетей при использовании временного
              мультиплексирования.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m16" style={{ color: "red" }}>
              16. Режимы сетевой синхронизации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m17" style={{ color: "red" }}>
              17. Временное мультиплексирование в сетях GSM.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m18" style={{ color: "red" }}>
              18. Временное мультиплексирование в пассивных оптических сетях
              PON.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m19" style={{ color: "red" }}>
              19. Принцип мультиплексирования с кодовым разделением.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m20" style={{ color: "red" }}>
              20. Корреляционная функция и ортогональность сигналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="m21" style={{ color: "red" }}>
              21. Общий алгоритм кодового разделения в сотовых сетях.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
          <br></br>
          <p>
            <a name="m22" style={{ color: "red" }}>
              22. Функции Уолша и их свойства.
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
            <a name="m23" style={{ color: "red" }}>
              23. Кодовое разделение на примере двух каналов
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
            <a name="m24" style={{ color: "red" }}>
              24. Классификация методов множественного доступа в сетях.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
        </Div>
      </Group>

      <br></br>

      <Group title="Технологии коммутации">
        <Div>
          <p>
            <a name="k1" style={{ color: "red" }}>
              1. Классификация сетевых технологий. Технологии коммутации.
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
            <a name="k2" style={{ color: "red" }}>
              2. Зачем нужны центры коммутации и каковы последствия их
              использования на сетях связи?
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
            <a name="k3" style={{ color: "red" }}>
              3. Иерархическая структура и нумерация телефонной сети общего
              пользования.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="k4" style={{ color: "red" }}>
              4. Иерархическая структура пакетных сетей связи.
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
            <a name="k5" style={{ color: "red" }}>
              5. Способы урегулирования коллизий на сетях связи.
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
            <a name="k6" style={{ color: "red" }}>
              6. Свойства коммутируемых соединений.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="k7" style={{ color: "red" }}>
              7. Особенности услуг TriplePlay инфокоммуникационных
              мультисервисных сетей.
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
            <a name="k8" style={{ color: "red" }}>
              8. Классификация технологий коммутации. Коммутация каналов.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="k9" style={{ color: "red" }}>
              9. Классификация технологий коммутации. Коммутация сообщений.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k10" style={{ color: "red" }}>
              10. Классификация технологий коммутации. Коммутация пакетов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k11" style={{ color: "red" }}>
              11. Проблемы, возникающие при объединении сетей, и способы их
              решения.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k12" style={{ color: "red" }}>
              12. Требования к технологиям объединения сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k13" style={{ color: "red" }}>
              13. Способы реализации технологии коммутации каналами.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k14" style={{ color: "red" }}>
              14. Принципы построения ручных телефонных станций.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k15" style={{ color: "red" }}>
              15. Принцип коммутации с непосредственным управлением процессом
              соединения. Что такое искатель?
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k16" style={{ color: "red" }}>
              16. Принцип регистрового управления. Назначение регистра.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k17" style={{ color: "red" }}>
              17. Принцип регистрово-маркерного управления. Назначение маркера.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k18" style={{ color: "red" }}>
              18. Принцип построения многозвенных коммутационных схем.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k19" style={{ color: "red" }}>
              19. Принцип построения центров коммутации с программным
              управлением на базе специализированной ЭВМ.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k20" style={{ color: "red" }}>
              20. Особенности аналоговых и цифровых центров коммутации каналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k21" style={{ color: "red" }}>
              21. Особенности синхронного и асинхронного режимов передачи
              данных.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
          <br></br>
          <p>
            <a name="k22" style={{ color: "red" }}>
              22. Пространственная, временная и пространственно-временная
              коммутация каналов.
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
            <a name="k23" style={{ color: "red" }}>
              23. Принципы построения центров коммутации.
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
            <a name="k24" style={{ color: "red" }}>
              24. Способы построения многопроцессорных управляющих систем
              центров коммутации.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="k25" style={{ color: "red" }}>
              25. Узел коммутации типа DX-200.
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
            <a name="k26" style={{ color: "red" }}>
              26. Узел коммутации типа Аlcatel 1000S12.
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
            <a name="k27" style={{ color: "red" }}>
              27. Узел коммутации типа 5ESS-2000.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="k28" style={{ color: "red" }}>
              28. Эволюция архитектур сетевых центров.
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
            <a name="k29" style={{ color: "red" }}>
              29. Особенности технологии коммутации сообщений.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="k30" style={{ color: "red" }}>
              30. Принципы построения службы коротких сообщений.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k31" style={{ color: "red" }}>
              31. Особенности технологии коммутации пакетов. Модель формирования
              блоков данных.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k32" style={{ color: "red" }}>
              32. Дейтаграммный режим коммутации пакетов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k33" style={{ color: "red" }}>
              33. Коммутация пакетов в режиме виртуального соединения.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k34" style={{ color: "red" }}>
              34. Эволюция технологий коммутации. Быстрая и многоскоростная
              коммутация каналов.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="k35" style={{ color: "red" }}>
              35. Эволюция технологий коммутации. Быстрая коммутация пакетов.
              IP/MPLS.
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
