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
import img1 from "./multi.jpg";
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
            <a href="#i1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#i20">20</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Идентификация в интернете вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#id20">20</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Особенности сетей / Сенсорные сети">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#o14">14</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Эталонные модели интернета вещей">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#e13">13</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Протоколы">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#p21">21</a>
          </Button>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Технологии">
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt1">1</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt2">2</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt3">3</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt4">4</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt5">5</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt6">6</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt7">7</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt8">8</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt9">9</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt10">10</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt11">11</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt12">12</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#t13">13</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt14">14</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt15">15</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt16">16</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt17">17</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt18">18</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt19">19</a>
          </Button>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt20">20</a>
          </Button>
        </Div>
        <Div style={{ display: "flex", marginBottom: -23 }}>
          <Button size="l" stretched style={{ width: 7 }}>
            <a href="#tt21">21</a>
          </Button>
        </Div>
      </Group>
      /////////////////////////////////////////////////удалить!!!!!!!
      <br></br>
      <Group title="Технологии передачи сигналов">
        <Div>
          <p>
            <a name="t1" style={{ color: "red" }}>
              1. Классификация сетевых технологий.
            </a>
            <br></br>
            Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю.
            <br></br>
            Технологии мультиплексирования (уплотнения) – позволяет повысить
            использование физических сетевых ресурсов, обеспечивающих процесс
            передачи.
            <br></br>
            Технология коммутации - предназначена для организации совместного
            использования сетевых ресурсов, образованных в результате
            мультиплексирования.
          </p>
          <br></br>
          <p>
            <a name="t2" style={{ color: "red" }}>
              2. Информация и ее основные элементы.
            </a>
            <br></br>
            Информация — осознанные сведения об окружающем мире, которые
            являются объектом хранения, преобразования, передачи и
            использования.
            <br></br>
            Объективность, Достоверность, Полнота, Точность, Актуальность,
            Полезность (ценность).
          </p>
          <br></br>
          <p>
            <a name="t3" style={{ color: "red" }}>
              3. Модель информационного взаимодействия людей.
            </a>
            <br></br>
            Информационное взаимодействие людей обеспечивается передачей
            (перемещением) данных от источника к получателю при помощи
            фундаментального физического процесса, который называется
            электромагнитное в заимодействие.
            <br></br>2 метауровня - 2) идеальный - смысл 1) физиологический -
            сигналы
            <br></br>
            Источник информации -> Передатчик -> Канал (Источник шума) ->
            Приемник -> Адресат
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
            звуковые, световые, электромагнитные волны, др.
            <br></br>
            Электромагни́тный спектр — совокупность всех диапазонов частот
            электромагнитного излучения.
          </p>
          <br></br>
          <p>
            <a name="t5" style={{ color: "red" }}>
              5. Скорость распространения сигналов электросвязи.
            </a>
            <br></br>
            Зависит от частоты сигнала и свойств среды распространения. Ее надо
            учитывать при проектировании инфокоммуникациионых систем и сетей.
            Радиоволны распространяются со скоростью близкой к скорости света.
            Радиоволны - близко к скорости света. Витая пара - NVP - 68-72% от
            скорости света. Коаксиальный кабель - NVP - 60-70% от скорости
            света. В оптическом волокне - зависит от коэф. преломления
            сердечника волокна n и определяется как V=c/n.
          </p>

          <br></br>
          <p>
            <a name="t6" style={{ color: "red" }}>
              6. Общая схема системы связи. Характеристики процесса передачи
              сигналов.
            </a>
            <br></br>
            Источник информации -> Передатчик -> Канал (Источник шума) ->
            Приемник -> Адресат
            <br></br>
            Источник информации создает сообщение которые должны быть переданы
            <br></br>
            Передатчик перерабатывает сообщение в сигнал, соответствующим
            характеристикам канала.
            <br></br>
            Канал - среда, используемая для передачи сигнала от передатчика к
            приемнику.
            <br></br>
            Приемник - восстанавливает сообщение, передает адресату.
            <br></br>
            Адресат - получатель сообщения.
          </p>

          <br></br>
          <p>
            <a name="t7" style={{ color: "red" }}>
              7. Информационные обьекты процесса информационного взаимодействия.
            </a>
            <br></br>
            Сообщения - данные в виде кодовой последовательности знаков языка
            взаимодействия, созданные источником. Несет смысл, понятный для
            коммуникантов.
            <br></br>
            Данные - обобщенное обозначение для любой информации, представленной
            в электромагнитной или цифровой форме.
            <br></br>
            Сигнал – данные, имеющие физическую форму, обеспечивающие
            перемещение от отправителя к получателю по физической среде
            взаимодействия. Сигнал – переносчик сообщения в физическом
            пространстве.
          </p>

          <br></br>
          <p>
            <a name="t8" style={{ color: "red" }}>
              8. Обобщенная модель процесса информационного взаимодействия людей
              и ее элементы.
            </a>
            <br></br>2 метауровня - 2) идеальный - смысл (коммуниканты A,B) 1)
            материальный - сообщение(технические средства) + сигнал (физическая
            среда взаимодействия)
          </p>

          <br></br>
          <p>
            <a name="t9" style={{ color: "red" }}>
              9. Примеры процессов информационного взаимодействия людей.
            </a>
            <br></br>
            Общение между людьми (словами), смс-переписка (текст).
          </p>

          <br></br>
          <p>
            <a name="t10" style={{ color: "red" }}>
              10. Основные понятия процесса передачи сигналов.
            </a>
            <br></br>
            Вытекают из обобщенной модели информационного взаимодействия
            <br></br>
            Передача(перемещение данных)
            <br></br>
            1) Сообщение (Язык, Тип сообщения, Вероятность появления, Контент)
            <br></br>
            2) Сигнал (Преобразование, Модуляция, Кодирование)
            <br></br>
            3) Линии связи (Медный кабель, ВОЛС, Эфир, Энергосистемы)
          </p>

          <br></br>
          <p>
            <a name="t11" style={{ color: "red" }}>
              11. Сообщение и языки их представления.
            </a>
            <br></br>
            Сообщение несет смысл, закодированный на языке, который понятен
            адресату.
            <br></br>
            Язык - набор знаков и связей между ними.
            <br></br>
            Жесткий - программирование, знаки пдд. Мягкий - музыка, человеческое
            общение.
          </p>

          <br></br>
          <p>
            <a name="t12" style={{ color: "red" }}>
              12. Сообщение в теории информации.
            </a>
            <br></br>
            Сообщение в произвольное время может быть сохранено отправителем в
            памяти информационной системы и выбрано из памяти получателем,
            которому интерес смысл сообщения.
            <br></br>
            Контент - это смысл сообщений, от которого зависит значимость
            (ценность) сообщений для получателей.
          </p>

          <br></br>
          <p>
            <a name="t13" style={{ color: "red" }}>
              13. Сигнал электросвязи.
            </a>
            <br></br>- это электромагнитное колебание, при помощи которого знаки
            сообщения передаются от отправителя к получателю по каналу связи.
            <br></br>В качестве сигнала могут выступать электрический ток,
            звуковые, световые, электромагнитные волны, др.
            <br></br>
            Для преобразования сообщения в сигнал независимыми устройствами или
            одним совмещенным устройством должны быть реализованы 3 операции:
            <br></br>
            1) Преобразование - восстановление: операция изменения вида
            физической величины, представляющей сообщение, таким образом, чтобы
            создать условия для его перемещения по каналу связи.
            <br></br>
            2) Модуляция - операция изменения параметров электромагнитного
            колебания в соответствии с передаваемым сообщением. Колебание,
            выполняющее роль переносчика данных, называется несущей, изменяемые
            параметры несущей - информационными, а устройство, реализующее
            операции мод/демод - модем.
            <br></br>
            3) Кодирование - определяет физическую и материальную сторону
            превращения сообщения в сигнал, это процедура изменения сигнала для
            улучшения условий его доставки. Различают статическое,
            помехоустойчивое, криптографическое и др. виды математического
            кодирования.
          </p>

          <br></br>
          <p>
            <a name="t14" style={{ color: "red" }}>
              14. Классификация и технические характеристики сигналов.
              электросвязи
            </a>
            <br></br>
            Аналоговые - определены в непрерывном времени отрезке значений
            энергии (амплитуды, уровня) сигнала.<br></br>
            Дискретные по времени - задаются непрерывными значениями уровня
            только в отдельных точках оси времени.<br></br>
            Дискретные по уровню - заданы на конечном множестве значений уровней
            сигнала.<br></br>
            Дискретные и по времени и по уровню - имеют отдельные значения
            уровня в отдельных точках оси времени.<br></br>
            Цифровые - можно описать последовательностью чисел.<br></br>
            Детерминированные и случайные. - степени предсказуемости, дет - все
            параметры известны, случайные - один из параметров точно не может
            быть предсказан.<br></br>
            Характеристики:
            <br></br>
            1) длительность - время существования сигнала
            <br></br>
            2) ширина спектра - диапазон частот, в котором сосредоточена
            основная доля энергии сигнала.
            <br></br>
            3) динамический диапазон - отношение в децибелах наибольшой
            мгновенной мощности сигнала к наименьшей, которая необходима для
            обеспечения заданного качества передачи.
          </p>

          <br></br>
          <p>
            <a name="t15" style={{ color: "red" }}>
              15. Ширина спектра и скорость передачи сигналов.
            </a>
            <br></br>
            Ширина полосы канала B - это спектр частот, составляющих сигнал.
            <br></br>
            Скорость передачи данных - это количество бит, передаваемое за 1
            секунду.
            <br></br>
            Пропускная способность канала C - это максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="t16" style={{ color: "red" }}>
              16. Спектральное представление сигналов.
            </a>
            <br></br>
            Кроме зависимости амплитуды от времени, в теории передачи сигналов
            используется его описание функциями частоты. Сумма (совокупность)
            гармонических колебаний называется частотным спектром сигнала.
          </p>

          <br></br>
          <p>
            <a name="t17" style={{ color: "red" }}>
              17. Операции преобразования / восстановления сообщений.
            </a>
            <br></br>
            Преобразование - восстановление: операция изменения вида физической
            величины, представляющей сообщение, таким образом, чтобы создать
            условия для его перемещения по каналу связи.
            <br></br>
            Предполагает изменение физической формы представления данных.
            <br></br>
            Электрозвуковые, радио, электрооптические преобразования.
          </p>

          <br></br>
          <p>
            <a name="t18" style={{ color: "red" }}>
              18. Исторически значимые изобретения для преобразования сигналов.
            </a>
            <br></br>
            Параллельная шина - электромеханическое преобразование.
            <br></br>
            Дискретный сигнал - электротекстовые преобразования.
            <br></br>
            Аналоговый сигнал - электрозвуковые преобразования.
          </p>

          <br></br>
          <p>
            <a name="t19" style={{ color: "red" }}>
              19. Преобразование сигналов радиосвязи.
            </a>
            <br></br>
            Устройство, предназначенное для преобразования радиоволн, называется
            АНТЕННА.
            <br></br>
            Передающая антенна преобразует энергию электромагнитного колебания,
            поступающего от радиопередатчика в электромагнитную волну,
            распространяющуюся в пространстве.
            <br></br>
            Приемные антенны преобразуют энергию электромагнитной волны в
            электромагнитное колебание, поступающего в радиоприемник.
          </p>

          <br></br>
          <p>
            <a name="t20" style={{ color: "red" }}>
              20. Электрооптические преобразования сигналов.
            </a>
            <br></br>
            Преобразование электрического сигнала в изображение на
            люминесцентном экране (кинескоп).
            <br></br>
            Излучатели, фотоприемники, ВОЛС (системы, содержащие
            волоконно-оптический световод).
          </p>

          <br></br>
          <p>
            <a name="t21" style={{ color: "red" }}>
              21. Операции модуляции и демодуляции.
            </a>
            <br></br>
            Модуляция - операция изменения параметров электромагнитного
            колебания в соответствии с передаваемым сообщением. Колебание,
            выполняющее роль переносчика данных, называется несущей, изменяемые
            параметры несущей - информационными, а устройство, реализующее
            операции мод/демод - модем.
            <br></br>
            По виду электромагнитного колебания - аналоговая и импульсная.
            <br></br>
            По виду информационного параметра - амплитудную, частотную, фазовую,
            кодовую, комбинированную.
            <br></br>
            По диапазону частот электромагнитного спектра - проводную, радио,
            оптическую.
          </p>
          <br></br>
          <p>
            <a name="t22" style={{ color: "red" }}>
              22. Аналоговая и импульсная модуляция сообщений.
            </a>
            <br></br>
            Аналоговая отображает сообщение изменением амплитуды, частоты или
            фазы синусоидального колебания несущей частоты.
            <br></br>
            Импульсная - модулирующий сигнал представлен последовательностью
            импульсов.
          </p>
          <br></br>
          <p>
            <a name="t23" style={{ color: "red" }}>
              23. Аналоговая частотная модуляция.
            </a>
            <br></br>- при которой информационный сигнал по определенному закону
            управляет частотой несущего колебания.
          </p>
          <br></br>
          <p>
            <a name="t24" style={{ color: "red" }}>
              24. Аналоговая модуляция по амплитуде и фазе.
            </a>
            <br></br>
            совмещает в себе аналоговые амплитудную и фазовую модуляцию и
            способна передавать несколько бит одним символом.
          </p>
          <br></br>
          <p>
            <a name="t25" style={{ color: "red" }}>
              25. Импульсно-кодовая модуляция.
            </a>
            <br></br>
            Процесс модуляции сводится к измерению амплитуды аналогового сигнала
            в моменты времени, отстоящие от друг друга на такт временной
            дискретизации, и, затем, к кодированию этих амплитуд цифровым кодом.
            <br></br>
            Используются процедуры квантования и компандирования.
          </p>
          <br></br>
          <p>
            <a name="t26" style={{ color: "red" }}>
              26. Структура кадра первичного потока ИКМ.
            </a>
            <br></br>1 канал (слот) - 8 бит за 125мкс (64кбит/с)
            <br></br>1 цикл (кадр) - 32 канала, 256 бит, 125мкс
            <br></br>1 сверхцикл - 16 циклов, 2048 бит, 2мс.
          </p>

          <br></br>
          <p>
            <a name="t27" style={{ color: "red" }}>
              27. Оптическая модуляция.
            </a>
            <br></br>В качестве оптической несущей используют электромагнитное
            колебание с гармоническим законом измерения напряженности
            электрического поля. Информационный модулирующий сигнал может
            воздействовать на амплитуду, частоту и фазу несущей. Кроме того,
            можно управлять поляризацией оптического колебания. Информационный
            сигнал может быть элекрическим, акустическим, механическим,
            оптическим.
          </p>

          <br></br>
          <p>
            <a name="t28" style={{ color: "red" }}>
              28. Операции кодирования / декодирования.
            </a>
            <br></br>
            Кодирование - определяет физическую и материальную сторону
            превращения сообщения в сигнал, это процедура изменения сигнала для
            улучшения условий его доставки. Различают статическое,
            помехоустойчивое, криптографическое и др. виды математического
            кодирования.
            <br></br>
            Надо различать физическое и математическое кодирование цифровых
            сигналов.
          </p>

          <br></br>
          <p>
            <a name="t29" style={{ color: "red" }}>
              29. Физическое кодирование цифровых сигналов.
            </a>
            <br></br>В процессе распространения данных по цифровым сетям связи
            на стороне источника информации каждый бит представляется
            электрическим импульсом, который занимает несколько состояний,
            соответствующим логическим 1 и 0 или их комбинации.
          </p>

          <br></br>
          <p>
            <a name="t30" style={{ color: "red" }}>
              30. Логическое кодирование цифровых сигналов. Исключение длинных
              последовательностей одинаковых по значению бит при помощи
              избыточных кодов или скрэмблирования.
            </a>
            <br></br>
            Предшествует физическому кодированию, не влияет на смысл сообщения и
            предназначено для изменения исходной битовой последовательности
            таким образом, чтобы создать условия для ее успешной передачи по
            каналу связи.
            <br></br>
            Избыточные коды основаны на разбиении исходной последовательности
            бит на группы, которые затем заменяются новым кодом, состоящим из
            большего количества бит таких, которые не содержат длинных цепочек
            одинаковых бит.
            <br></br>
            Скремблирование предполагает вычисление значения бита новой линейной
            битовой последовательности как функцию от текущего и предшествующих
            битов исходной последовательности.
          </p>

          <br></br>
          <p>
            <a name="t31" style={{ color: "red" }}>
              31. Логическое кодирование цифровых сигналов. Помехоустойчивое
              кодирование. Обеспечение конфиденциальности.
            </a>
            <br></br>
            Предоставляет возможность обнаружения ошибок передачи на приемной
            стороне. Конфиденциальность данных обеспечивается при помощи
            криптографического кодирования.
          </p>

          <br></br>
          <p>
            <a name="t32" style={{ color: "red" }}>
              32. Пример системы логического кодирования данных в стандарте
              IS-95.
            </a>
            <br></br>
            Типичный процесс логического кодирования речевых данных в мобильной
            сети 2G с кодовым разделением каналов стандарта IS-95 (cdmaOne
            стандарт) включает следующие этапы:
            <br></br>
            1) речевой сигнал поступает в речевой кодек, оцифровывается и
            сжимается
            <br></br>
            2) далее следует блок помехоустойчивого кодирования, который
            кодирует сигналы циклическим кодом, способным исправлять до 3 ошибок
            в пакете данных.
            <br></br>
            3) реализуется защита от пачечных ошибок возникающих в радиоканале
            <br></br>
            4) далее располагается блок криптографического кодирования от
            несанкционированного подслушивания.
            <br></br>
            5) данные перемножаются на код Уолша для реализации процедуры
            кодового разделения каналов CDMA
            <br></br>
            6) перед модуляцией блоки данных умножаются на две псевдослучаные
            последовательности ПСП1 и ПСП2 для синхронизации выходных и входных
            потоков.
          </p>

          <br></br>
          <p>
            <a name="t33" style={{ color: "red" }}>
              33. Сравнение аналоговых и дискретных сигналов.
            </a>
            <br></br>
            Аналоговые отображают непрерывность времени и пространства в природе
            и основываются на неделимости обьекта как целого.
            <br></br>
            Дискретные предполагают возможность разделения обьекта и во времени
            , и в пространстве на относительно самостоятельные составляющие. Их
            удобно преобразовывать средствами цифровой вычислительной техники.
          </p>

          <br></br>
          <p>
            <a name="t34" style={{ color: "red" }}>
              34. Сравнение аналоговых и дискретных каналов связи.
            </a>
            <br></br>
            По отношению к каналу связи сигналы во всех случаях представляют
            собой модулированные электромагнитные колебания.
            <br></br>
            Аналоговые каналы настроены на модулирующие воздействия, которые
            приводят к непрерывным изменениям информационных парметров сигнала.
            <br></br>
            Дискретные каналы - сигнал занимает конечное число состояний. Каждое
            состояние называется символ и соответствует одному из знаков
            дискретного сообщения.
          </p>

          <br></br>
          <p>
            <a name="t35" style={{ color: "red" }}>
              35. Информационные характеристики сигналов и их связь с
              физическими характеристиками.
            </a>
            <br></br>
            1) длительность - время существования сигнала - больше времени -
            большее число изменений значений параметров
            <br></br>
            2) ширина спектра - диапазон частот, в котором сосредоточена
            основная доля энергии сигнала. - высокочастотные гармоники чаще
            меняют значение информационно значимых параметров в единицу времени
            <br></br>
            3) динамический диапазон - отношение в децибелах наибольшой
            мгновенной мощности сигнала к наименьшей, которая необходима для
            обеспечения заданного качества передачи. - мгновенное значение
            амплитуды сигнала может принимать большее число различимых значений.
          </p>

          <br></br>
          <p>
            <a name="t36" style={{ color: "red" }}>
              36. Информационный объем сигнала при распространении и сохранении
              данных.
            </a>
            <br></br>
            Измеряется в битах и позволяет сопоставить обьем данных,
            выработанных источником информации для передачи его по физической
            среде. В общем случае инф. обьем сигнала источника зависит от 3
            параметров:
            <br></br>
            1) время формирования данных источником - которое задает
            длительность сигнала (время существования)
            <br></br>
            2) частота формирования знаков - количество знаков которые могут
            сформированы источником за время (задает спектр сигнала)
            <br></br>
            3) количество бит, содержащихся в 1 знаке
          </p>

          <br></br>
          <p>
            <a name="t37" style={{ color: "red" }}>
              37. Информационный объем канала.
            </a>
            <br></br>
            Общее представление о возможностях и способах управления каналами
            связи, как среды для распространения сигналов, дает обьем канала V,
            который измеряется в битах и зависит от трех параметров:
            <br></br>
            1) время использования канала<br></br>
            2) пропускная способность канала - максимальная скорость передачи
            дискретных символов
            <br></br>
            3) Количество бит, которое переносит 1 символ.
          </p>

          <br></br>
          <p>
            <a name="t38" style={{ color: "red" }}>
              38. Алгоритмический объем сигнала и пиковая производительность
              процессора.
            </a>
            <br></br>- задает сложность алгоритма - это количество операций,
            которые требуется выполнить для получения искомых данных из
            исходных. Величина V зависит не только от особенностей алгоритма, но
            и от обьема входных данных (информационного обьема сигнала) и от
            особенностей (содержательной стороны) самих данных.
            <br></br>
            Пиковая производительность процессора: Gпр = F.пр (тактовая частота
            вычислительного ядра в ГЦ ) * r.пр (количество операций выполняемых
            за один такт) * k.пр (число вычислительных ядер у процессора)
          </p>

          <br></br>
          <p>
            <a name="t39" style={{ color: "red" }}>
              39. Что такое линия связи? Характеристики и классификация линий
              связи.
            </a>
            <br></br>- это совокупность физической среды и технических
            устройств, обеспечивающих передачу сигналов.
            <br></br>
            Линию связи характеризуют:
            <br></br>
            1) время, в течении которого она может использоваться для передачи
            сигналов
            <br></br>
            2) пропускная способность, измеряемая в обьеме данных, которые могут
            быть переданы по линии связи в единицу времени (чем выше пропускная
            способность, тем с большей скоростью можно передавать данные)
            <br></br>
            3) физические характеристики линии, которые во всех случаях должны
            быть согласованы с физическими характеристиками сигналов
            <br></br>
            Бывают проводными (на основе кабелей) и беспроводными (естественные
            обьекты - атмосфера, космос, толща земли. зависят от законов
            природы, а не от техн. решений).
          </p>

          <br></br>
          <p>
            <a name="t40" style={{ color: "red" }}>
              40. Особенности медных кабелей.
            </a>
            <br></br>
            Кабель с медной жилой обладает рядом достоинств:
            <br></br>
            Высокая токо- и теплопроводность. Для электромонтажных работ лучше
            использовать кабель не с алюминиевой, а с медной жилой, так как он
            имеет меньший диаметр сечения. Свойства кабеля не меняются при
            окислении металла.
            <br></br>
            Гибкость. Медные изделия отличаются пластичностью и устойчивостью к
            изломам при скручивании и изгибе. Это облегчает монтаж и
            эксплуатацию материала.<br></br>
            Стойкость к коррозии и долговечность. Полная замена установленной в
            помещении проводки требует капитального ремонта. Медный кабель имеет
            срок эксплуатации 30-35 лет.<br></br>
            Нет риска возгорания проводов. Медный кабель не поддерживает
            горение, а изоляционный материал выделяет при пожаре минимальное
            количество дыма и газа.
          </p>

          <br></br>
          <p>
            <a name="t41" style={{ color: "red" }}>
              41. Особенности волоконно-оптических кабелей.
            </a>
            <br></br>
            Может содержать один или несколько световодов (оптических волокон).
            <br></br>
            Каждый световод - оптически прозрачная нить, изготовленная из стекла
            или пластика и способная переносить внутри световой луч посредством
            полного внутреннего отражения.
            <br></br>
            Плюсы: помехозащищенность и секретность передаваемой информации.
            Электромагнитные помехи не способны исказить световой сигнал, а сам
            сигнал не порождает внешних электромагнитных излучений.
            <br></br>
            Невозможно несанкционированно подключиться. Меньше величина
            затухания.
            <br></br>
            Минусы: высокая сложность монтажа, меньше прочность и гибкость. Хуже
            переносит механическое растяжение, перепады температуры.
            Чувствительность к ионизирующим излучениям - снижается прозрачность
            нити и увеличивается затухание сигнала.
          </p>

          <br></br>
          <p>
            <a name="t42" style={{ color: "red" }}>
              42. Особенности линий радиосвязи.
            </a>
            <br></br>
            использует радиоволны в качестве носителя сигнала.
            <br></br>
            Радиоволны представляют собой электромагнитные колебания.
            <br></br>
            Характеризуется частотой, длиной волны и мощностью переносимой
            энергии.
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
            Технологии передачи данных - обеспечивает перемещение данных в
            пространстве от отправителя к получателю.
            <br></br>
            Технологии мультиплексирования – позволяет повысить использование
            физических сетевых ресурсов, обеспечивающих процесс передачи. – это
            процесс, позволяющий увеличить пропускную способность физических
            линий связи за счет одновременной передачи по ним нескольких
            сигналов.
            <br></br>
            Технологии коммутации – организация совместного использования
            отправителями групповых сетевых ресурсов, образованных в результате
            мультиплексирования.
          </p>
          <br></br>
          <p>
            <a name="m2" style={{ color: "red" }}>
              2. Модель процесса мультиплексирования. Мультиплексор,
              демультиплексор, канал связи.
            </a>
            <br></br>- к одной и той же линии при помощи специального
            оборудования (мультиплексора) подключается несколько отправителей
            сообщений;
            <br></br>- сообщения всех отправителей одновременно перемещаются к
            получателям на приемную сторону.
            <br></br>- получатели на приемной стороне при помощи демультплексора
            принимают из линии связи каждый свое сообщение.
            <br></br>
            <img src={img1} />
            <br></br>
            Мультиплексор – это устройство, реализующее функцию
            мультиплексирования (он смешивает перед передачей в линию сигналы,
            отображающие сообщения разных информационных источников).
            <br></br>
            Демультиплексор реализует обратную функцию (он разделяет и
            преобразовывает сигналы, поступившие из линии, в независимые
            сообщения).
            <br></br>
            При мультиплексировании физическая высокоскоростная линия связи
            разделяется на отдельные каналы, каждый из которых одновременно с
            другими каналами может использоваться для организации
            информационного взаимодействия пользователей. Доступ к каналу
            пользователи могут получать через низкоскоростные линий связи.
          </p>
          <br></br>
          <p>
            <a name="m3" style={{ color: "red" }}>
              3. Иерархическая структура процесса мультиплексирования.
            </a>
            <br></br>
            При мультиплексировании образуются иерархические каскады
            мультиплексоров.<br></br>В первом каскаде объединяются
            информационные потоки нескольких низкоскоростных линий связи, через
            которые пользователи подключаются к входам сети.<br></br>
            Во втором каскаде объединяются линии, уплотненные в первом каскаде и
            так далее. Для выделения исходных информационных потоков необходимо
            построить соответствующую иерархию демультиплексоров.<br></br>
            Важной характеристикой уплотненной линии является количество
            каналов, которое может быть образовано в пределах одного медного
            кабеля, одной оптической линией или одной радиотехнической системой.
            Оно зависит от выбранного способа выделения каналов, максимальной
            скорости передачи информации по соответствующей линии связи и той
            скорости, которая выделяется на отдельные каналы.
          </p>
          <br></br>
          <p>
            <a name="m4" style={{ color: "red" }}>
              4. Классификация технологий образования каналов при
              мультиплексировании.
            </a>
            <br></br>
            Технологии мультиплексирования используют свойства электромагнитных
            колебаний и различаются способом образования каналов при уплотнении
            физической линии связи.
            <br></br>
            Частотное мультиплексирование - FDM
            <br></br>
            Временное мультиплексирование - TDM
            <br></br>
            Кодовое мультиплексирование - CDMA
            <br></br>
            Пространственное мультиплексирование
          </p>
          <br></br>
          <p>
            <a name="m5" style={{ color: "red" }}>
              5. Принцип частотного мультиплексирования.
            </a>
            <br></br>
            Частотное мультиплексирование FDM (Frequency-Division Multiplexing)
            предполагает, что каналы занимают относительно узкие частотные
            полосы в отведенных для них частотных диапазо- нах. Каждый входной
            сигнал накладывается на частоту своего канала (эту частоту называют
            несущей) и поэтому в частотной области не перекрывается с другими
            входными сигналами. Выделение конкрет- ного сигнала из смеси,
            передаваемой по линии, осуществляется при помощи операции
            фильтрации.
            <br></br>Частотное мультиплексирование реализуется при условии, что
            ширина спектра передаваемых сигналов существенно ниже, чем полоса
            пропускания физической среды распространения.
          </p>

          <br></br>
          <p>
            <a name="m6" style={{ color: "red" }}>
              6. Частотное мультиплексирование на аналоговой сети.
            </a>
            <br></br>
            Частотное мультиплексирование в аналоговых сетях называется частотным разделением каналов (ЧРК).
            <br></br>
            Единицей измерения емкости аналоговых сис- тем передачи является канал тональной часто- ты (КТЧ), который занимает диапазон частот от 0,3 до 3,4 кГц.
            <br></br>
            Совокупность двенадцати КТЧ, занимающих в диапазоне частот смежные участки с общей
шириной 48 кГц, называется первичной группой.
<br></br>
Пять первичных групп, зани- мающие смежные участки с общей шириной 210 кГц – вторичной группой.
<br></br>
Пять вторичных групп или триста КТЧ, занимающих в диапазоне частот с общей ши- риной 1232 кГц смежные участки с интервалами меж- ду вторичными группами 8 кГц – третичной группой.
<br></br>
Для объединения 300 КТЧ требуется 3 каскада мультиплексоров, для разделения на приемной стороне – 3 каскада демультиплексоров.
          </p>

          <br></br>
          <p>
            <a name="m7" style={{ color: "red" }}>
              7. Частотное мультиплексирование в технологии ADSL.
            </a>
            <br></br>
            Одной из востребованных индивидуальными пользователями остается
            технология ADSL (асинх- ронная цифровая линия), в которой каналы для
            приема данных имеют более высокую скорость, чем каналы для передачи
            данных. Главное ее достоинство – возможность использования старой
            медной инфраструктуры на абонентском участке. <br></br>
            Передача сигналов реализуется при помощи модема, установленного у
            абонента, и мульти- плексора доступа DSLAM (DSL Access Multi-
            plexer,), находящегося на АТС. Аналоговая те- лефонная линия
            используется одновременно и сетью передачи данных, и телефонной
            сетью связи.
          </p>

          <br></br>
          <p>
            <a name="m8" style={{ color: "red" }}>
              8. Частотное разделение сигналов абонентской сигнализации.
            </a>
            <br></br>
            Для сигнального взаимодействия абонента с АТС и другими сетевы- ми службами при предоставлении дополнительных услуг стал использоваться тональный набор в форме двухтонального многочастотного аналогового сигнала DTMF (Dual-Tone Multi-Frequency), отправляемого с клавиатуры телефона.
Сигналы формируются сложением двух тональных частот, по одной из высокочастотной и низкочастотной групп. Частоты выбраны таким об- разом, чтобы избежать гармонических помех от речевых сигналов. Для кодирования одного сигнала одна частота берется из строки и одна –  из столбца таблицы. Имеется возможность закодировать 16 разных символов. Максимальная скорость набора номера в тональном режиме составляет 7 цифр в секунду.

          </p>

          <br></br>
          <p>
            <a name="m9" style={{ color: "red" }}>
              9. Мультиплексирование по длине волны.
            </a>
            <br></br>
            это технология, позволяющая одновременно передавать несколько информационных каналов по од- ному оптическому волокну на разных длинах волн. Ее можно рассматривать как особый вид частот- ного мультиплексирования на частотах выше 100 - 200 ТГц. В порядке уменьшения частотного раз- носа каналов различают грубые (CWDM), плотные (DWDM) и высокоплотные (HDWDM) сиcтемы.
          <br></br>
          Длина волны для передачи сигнала выбирается исходя из ОКОН ПРОЗРАЧНОСТИ – диапазонов длин волн оптического излуче- ния, в котором имеет место меньшее, по сравнению с другими диапазонами, затухание излучения в оптическом волокне.
Длину волны 850 нм используют для многомодового, 1310 нм
– и для многомодового, и для одномодового, а 1550 нм –
только для одномодового оптоволокна.
<br></br>Возможность существования устройств WDM основан на свойстве световодов одновременно пропускать множество
сигналов, которые, распространяясь, не взаимодействуют друг с другом. Это дает возможность ввести
в волоконный световод одновременно излучение от нескольких источников, работающих на разных длинах волн λ1,…, λn , а на приемном конце с помощью
оптических фильтров разде- лить эти сигналы.
<br></br>
ВОЛС – это система, которая содержит активные (модуляторы,
мультиплексор/демультиплексор, регенераторы (для восстановления формы оптических импульсов), усилители мощности сигнала и др.) и пассивные устройства (кабель, оптические муфты и кросс и др.).

          </p>

          <br></br>
          <p>
            <a name="m10" style={{ color: "red" }}>
              10. Перспективы мультиплексирования ВОЛС.
            </a>
            <br></br>
            Компания «Т8 НТЦ» разрабатывает DWDM-системы с пропускной способностью 25Тбит/с. Техническое решение основано на использовании 250 информационных каналов со скоростью 100 Гбит/с каждый в формате DP-QPSK. Для облегчения управляемости используется 25 суперка- налов, каждый из которых объединяет десять каналов и имеет скорость передачи
1 Тбит/с.	В «высокоплотной» HDWDM-
системе разнос несущих уменьшен до 33 ГГц
(в CWDM-системах он более 2500 ГГц, а в DWDM – около 100 ГГц),
что при ширине спектра источников менее
1 ГГц позволяет разместить в полосе высокой прозрачности кварцевого волокна десятки-сотни спектральных каналов.

          </p>

          <br></br>
          <p>
            <a name="m11" style={{ color: "red" }}>
              11. Принцип временного мультиплексирования.
            </a>
            <br></br>
            предполагает, что все время использования линии делится на циклы передачи и временные слоты, которые и образу- ют каналы. В распоряжение источникам периодически один раз за цикл предоставляется весь ресурс линии связи на время продолжительности слота. В этом случае для выделения нужного сигнала при приеме необходимо синхронизировать работу передающей и приемной систем.
<br></br>Временное мультиплексирование реализуется при условии, что по дискретным значениям энергии сигнала в выделяемых слотах можно
полностью восстановить сигнал на приемной стороне.

          </p>

          <br></br>
          <p>
            <a name="m12" style={{ color: "red" }}>
              12. Структура первичного потока ИКМ.
            </a>
           
            <br></br>1 канал (слот) - 8 бит за 125мкс (64кбит/с)
            <br></br>1 цикл (кадр) - 32 канала, 256 бит, 125мкс
            <br></br>1 сверхцикл - 16 циклов, 2048 бит, 2мс.
          </p>

          <br></br>
          <p>
            <a name="m13" style={{ color: "red" }}>
              13. Временное мультиплексирование и проблема синхронизации.
              Классификация типов синхронизации в сетях связи.
            </a>
            <br></br>
            Важное отличие TDM от FDM – это необходимость синхронизации.<br></br>
Синхронизация (от др.-греч. одновременный) – это поддержание хода протекания нескольких процессов на согласованной скорости (как на значке слева).
В технике различают три разных типа синхронизации, отличающиеся сложностью реализации и степенью согласованности процессов.<br></br>
1)	частотная синхронизация - означает, что все происходящие в системе периоди- ческие процессы (события) соответствуют одной и той же средней частоте (скорости).
<br></br>
2)	фазовая синхронизация  -  ставит более сложную задачу – помимо средней частоты всех событий должны быть достаточно близки и фазы этих событий.
<br></br>
3)	временная синхронизация   -  призвана, кроме того, обеспечить расположение фаз всех событий в привязке к какой-либо временной шкале.

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
            1) Синхронная сеть – сеть, в которой значащие моменты сигналов подстраиваются таким образом, чтобы установился синхронизм и значащие моменты точно повторялись с некоторой средней скоростью.
            <br></br>2) Проскальзывание (slip) – исключение или повторение в цифровом сигнале одного или нескольких бит, происходящее вследствие различия в скоростях записи и считывания буферных устройств.
            <br></br>3) Фазовые дрожания – отклонения значащих моментов цифрового сигнала от их идеальных положе- ний во времени. Кратковременные отклонения с частотой более 10 Гц называются джиттер, а долговременные отклонения с частотой менее 10 Гц – блуждания (вандер).
            <br></br>4) Первичный эталонный источник ПЭИ предназначен для формирования эталонных сигналов синхронизации и строится либо на основе цезиевого или водородного стандарта частоты, либо на основе спутниковых систем ГЛОНАСС или GPS (GPS используется в качестве резерва).
            <br></br>5) Первичный эталонный генератор ПЭГ – высокостабильный генератор, долговременное относи- тельное отклонение частоты которого от номинального значения поддерживается не превышающим 1x10-11 при контроле по универсальному координированному времени. Этот генератор обладает на сети синхронизации наивысшим качеством и занимает высшую (первую) ступень в иерархии.
            <br></br>6) Ведомый задающий генератор ВЗГ – генератор, фаза кото- рого подстраивается по входному сигналу, полученному от генератора более высокого или того же качества. Ведомый задающий генератор наивысшего качества занимает вторую и третью ступени в иерархии сети синхронизации.
            <br></br>7) Иерархическая синхронизированная сеть – сеть, в ко-
торой каждому генератору придан определенный статус управления им со стороны других генераторов.

          </p>

          <br></br>
          <p>
            <a name="m15" style={{ color: "red" }}>
              15. Синхронизация сетей при использовании временного
              мультиплексирования.
            </a>
            <br></br>
            Синхронизация сетевых процессов – это поддержание работы оборудования цифровых сетей на согласованной скорости, которая обеспечивает реализацию процессов передачи и приема данных в определенном порядке с допустимым сдвигом во времени.
            <br></br>
            1) Тактовая - обеспечивает правильное чтение битов в канале связи за счет согласования частот тактовых генераторов на взаимодействующих сетевых центрах. К ошибкам приводят фазовые дрожания из-за нестабильности параметров генераторов и линий передачи, а также разной скорости распространения частотных составляющих сигналов;
            <br></br>
            2) Цикловая - выделяет в цикловой структуре битового потока моменты нача- ла сверхциклов, циклов (кадров) и каналов (временных слотов). В результате данные из каждого канала поступают в назначенные им приемные устройства, а сигналы управления – к соответствующим сетевым центрам. Способ реализации – в состав группового цифрового сигнала вводятся синх- росигналы, которые отмечают начало цикла передачи. Кроме того, циклы входных данных записыва- ются в буферы со скоростью передающего генератора, а считываются оттуда уже со скоростью приемного генератора. Переполнение буфера (проскальзывание – slip) приводит или к потери цикла, или к повторному приему цикла, но не нарушает цикловую синхронизацию.
            <br></br>
            3) Сетевая - Она поддерживает точность и стабильность во времени всех тактовых генераторов сети. Способ реализации – создание сетей синхронизации (на базе ГЛОНАС).
          </p>

          <br></br>
          <p>
            <a name="m16" style={{ color: "red" }}>
              16. Режимы сетевой синхронизации.
            </a>
            <br></br>
            1) Синхронный режим является нормальным режимом работы цифровой сети, при котором проскальзывания носят только случайный характер. Этот режим обычно используется в пределах регионов синхронизации, границы которых совпадают с границами национальных цифровых сетей государств средних размеров.
<br></br>
2) Синхронный режим является нормальным режимом работы цифровой сети, при котором проскальзывания носят только случайный характер. Этот режим обычно используется в пределах регионов синхронизации, границы которых совпадают с границами национальных цифровых сетей государств средних размеров.
<br></br>
3) Плезиохронный режим работы возникает на цифровой сети, когда генератор ведомого узла полностью теряет возможность внешней принудительной синхронизации вследствие отказов как основного, так и всех резервных путей синхронизации, но способен автономно поддерживать точность установки частоты не хуже 1*10-9.
          </p>

          <br></br>
          <p>
            <a name="m17" style={{ color: "red" }}>
              17. Временное мультиплексирование в сетях GSM.
            </a>
            <br></br>
            GSM (Global System for Mobile communications) – глобальный стандарт цифровой мобильной сото- вой связи, с разделением каналов по частоте и времени.
            <br></br>
            Частотное мультиплексирование. Передача сигналов от мобильной станции (МС) к базовой стан- ции (БС) осуществляется в диапазоне 890-915 МГц, а БС к МС – в диапазоне 935-960 МГц. И пря- мой, и обратный диапазоны разбиты на 124 частотных канала с разносом между частотами 200 кГц.
            <br></br>
            Временное мультиплексирование. Каждый частотный канал используют 8 абонентов, пе- редавая в режиме TDM 148-битовые кадры:
            <br></br>
-	информационные биты разделены на две порции по 57 бит каждая,<br></br>
-	последовательность Sync – это известная комбинация битов, уникальная для каждой ячейки, используемая для настройки параметров приемника по получаемому сигналу,<br></br>
-	в каждом канальном интервале передаются служебные сигналы синхронизации, управления и др., а также защитные биты, предохраняющие от наложения сигналов соседних каналов.<br></br>
На режим TDM влияет время доставки данных между МС и БС, а оно, в свою очередь, зависит от расстояния между станциями. Для исключения попадания сигналов от мобильных станций, находящихся на разных расстояниях от БС, на общие временные интервалы, БС осуществляет временной сдвиг, зависящий от расстояния. При этом, также, регулируется мощность излучаемых сигналов.
          </p>

          <br></br>
          <p>
            <a name="m18" style={{ color: "red" }}>
              18. Временное мультиплексирование в пассивных оптических сетях
              PON.
            </a>
            <br></br>
            Технология проводного доступа по пассивным оптическим сетям PON (passive optical network) связывает многие абонентские узлы с одним сетевым центром, образуя соединение «точка-многоточка» (P2MP – point-to-multipoint). Пассивность означает отсутствие в сети элементов, усиливающих сигнал в процессе его распространения в направлении от сетевого центра к абонентским узлам и обратно. Активные устройства имеют следующие названия и выполняют следующие функции:
     <br></br>
     терминал оптической линии OLT (Optical Line Terminal)
– располагается в сетевом центре, генерирует оптические сигналы и мультиплексирует трафик пользователей;<br></br>
оптический сетевой терминал ONT (Optical Network Termination) – располагается в абонентском устройстве. Он может иметь практически любые интерфейсы для подклю- чения терминалов пользователей по витой паре, по коакси- альному кабелю, по линии радиосвязи или по локальным сетям. Взаимодействуя с OLT, он выделяет из общего потока входные данные, направляемые к его пользователям
<br></br>
В OLT и ONT встроены мультиплексоры WDM, разделяющие потоки данных.
Потоки данных от OLT ко всем ONT передаются на длине волны 1490 нм (или1550 нм) и каждый абонентский узел ONT, читая адресные поля, самостоятельно выделяет из этого общего широковещательного потока предназначенную только ему часть данных.
Потоки данных от всех ONT к OLT передаются на длине волны 1310 нм. Для разделения сиг- налов, поступающих от разных пользователей используется уплотнение TDM. Каждому активному ONT выделяется определенный временной домен, в течении которого он имеет возможность переда- вать все данные, накопленные за время занятости канала 1310 нм другими ONT. Здесь нет необходимости в передаче сигналов синхронизации и управления, поэтому нет циклов и сверхциклов.

        </p>

          <br></br>
          <p>
            <a name="m19" style={{ color: "red" }}>
              19. Принцип мультиплексирования с кодовым разделением.
            </a>
            <br></br>
            С соответствии с практикой внедрения мультиплексирования с кодовым разделением каналов его на- зывают множественный доступ с кодовым разделением CDMA (Code Division Mul- tiple Access). В этой технологии все источники имеют право
передавать сообщения ОДНОВРЕМЕННО В ОДНОМ СПЕКТРЕ ЧАСТОТ. При этом каждому источнику присваивается уникальный n- значный двоичный код и каждый интервал передачи бита раз- бивается на n временных периодов, называемых чипами (chip).
<br></br>Чип-код каждого канала уникален и имеет длину 64, 128 или более бит. Это значит, что длина линейной кодовой комби- нации увеличивается, а длительность одного элементарного
сигнала (символа) уменьшается многократно. Единичное и нулевое значения бита данных источника передаются при помощи прямого и инверсного значений одного и того же чип-кода.
<br></br>Чип-коды для разных источников должны быть попарно ортого- нальны. Тогда они не создают взаимных помех, не взаимодейст- вуют друг с другом и могут передаваться по каналу одновременно. На приемной стороне методами теории кодирования из смеси ортогональных сигналов можно выделить любой из одновремен- но переданных сигналов, если только известен его чип-код.
<br></br>Достоинства CDMA востребованы на сотовых сетях. К ним относятся высокая помехоустойчивость широкополосного сигнала к узкополосным помехам, энергетическая эффективность процесса пере- дачи данных и защищенность от несанкционированного доступа к соединениям без знания ин- дивидуальной кодовой последовательности канала.
К недостаткам можно отнести сложность оборудования и жесткие требования к синхронизации про-
цессов взаимодействия.

          </p>

          <br></br>
          <p>
            <a name="m20" style={{ color: "red" }}>
              20. Корреляционная функция и ортогональность сигналов.
            </a>
            <br></br>
            
          </p>

          <br></br>
          <p>
            <a name="m21" style={{ color: "red" }}>
              21. Общий алгоритм кодового разделения в сотовых сетях.
            </a>
            <br></br>
            При передаче сигналов от базовой к абонентским станциям выполняются следующие действия:<br></br>
1)	каждому из n информационных потоков, направляемым n пользователям, присваивается свой чип-код, попарно ортогональный с другими
чип-кодами;<br></br>
2)	информационный поток i-го пользователя кодируется i-м чип-кодом;<br></br>
3)	полученные сигналы складываются в суммирующем устройстве и отправляются в линию;<br></br>

На приемной стороне абонентская станция:<br></br>
1)	получает свой чип-код;<br></br>
2)	синхронизирует сигнал из линии и периодический чип-код и направляет их на входы коррелятора;<br></br>
3)	вычисляет при помощи коррелятора взаимную корреляционную функцию этих сигналов;<br></br>
4)	по отклику на выходе коррелятора определяет значения бит своего информационного потока.

          </p>
          <br></br>
          <p>
            <a name="m22" style={{ color: "red" }}>
              22. Функции Уолша и их свойства.
            </a>
            <br></br>
            В качестве ортогональных чип-кодов в системах CDMA применяют функции Уолша. Это семейство кодов, образующих ортогональную систему со значениями 1 и -1 на всей области определения. 
            <br></br>

          </p>
          <br></br>
          <p>
            <a name="m23" style={{ color: "red" }}>
              23. Кодовое разделение на примере двух каналов
            </a>
            <br></br>
       
          </p>
          <br></br>
          <p>
            <a name="m24" style={{ color: "red" }}>
              24. Классификация методов множественного доступа в сетях.
            </a>
            <br></br>
          1G / 2G GSM / 2G CDMA (IS-95) / 3G UMTS / 3G UMTS / 3G CDMA-2000
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
      <Group title="Основы интернета вещей">
        <Div>
          <p>
            <a name="i1" style={{ color: "red" }}>
              1. Что такое интернет. Этапы развития и будущее интернет.
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
            <a name="i2" style={{ color: "red" }}>
              2. Что такое интернет вещей? Стандартизация интернета вещей МСЭ-Т.
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
            <a name="i3" style={{ color: "red" }}>
              3. Сегменты интернета вещей. Индустриальный интернет.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="i4" style={{ color: "red" }}>
              4. Умные вещи как новый тип терминальных устройств.
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
            <a name="i5" style={{ color: "red" }}>
              5. Эволюция вещей.
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
            <a name="i6" style={{ color: "red" }}>
              6. Базовые технологии интернета вещей.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="i7" style={{ color: "red" }}>
              7. Идентификация в интернете вещей.
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
            <a name="i8" style={{ color: "red" }}>
              8. Всепроникающие сенсорные сети.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="i9" style={{ color: "red" }}>
              9. Динамика увеличения количества и распределения по Земле умных
              вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i10" style={{ color: "red" }}>
              10. Общая характеристика технологий M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i11" style={{ color: "red" }}>
              11. Статистика соединений M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i12" style={{ color: "red" }}>
              12. Интернет вещей как следующий этап развития технологий M2M.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i13" style={{ color: "red" }}>
              13. Организация соединений M2M в интернете вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i14" style={{ color: "red" }}>
              14. Общая характеристика чипов для интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i15" style={{ color: "red" }}>
              15. Что такое туманные вычисления?
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i16" style={{ color: "red" }}>
              16. Прогнозы развития мирового рынка интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i17" style={{ color: "red" }}>
              17. Эталонные модели интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i18" style={{ color: "red" }}>
              18. Уровневая организация интернета вещей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i19" style={{ color: "red" }}>
              19. Интернет вещей как сеть сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="i20" style={{ color: "red" }}>
              20. Дополненная реальность.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Идентификация в интернете вещей">
        <Div>
          <p>
            <a name="id1" style={{ color: "red" }}>
              1. Классификация технологии интернета вещей.
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
            <a name="id2" style={{ color: "red" }}>
              2. Что такое радиочастотная идентификация. Области применения.
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
            <a name="id3" style={{ color: "red" }}>
              3. Технологии, реализованные в RFID системах
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="id4" style={{ color: "red" }}>
              4. Преимущества и недостатки радиочастотной идентификации.
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
            <a name="id5" style={{ color: "red" }}>
              5. Классификация RFID меток.
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
            <a name="id6" style={{ color: "red" }}>
              6. Пассивные метки с чипом.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="id7" style={{ color: "red" }}>
              7. Активные метки с чипом.
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
            <a name="id8" style={{ color: "red" }}>
              8. Стандарты ISO в области RFID .
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="id9" style={{ color: "red" }}>
              9. Стандарты EPC Global. Функциональные группы меток.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id10" style={{ color: "red" }}>
              10. Структура памяти метки стандарта Gen2.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id11" style={{ color: "red" }}>
              11. Физические основы построения меток без чипа.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id12" style={{ color: "red" }}>
              12. RFID метка на ПАВ с отражающими элементами.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id13" style={{ color: "red" }}>
              13. Сравнение меток, построенных на разных технологиях.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id14" style={{ color: "red" }}>
              14. Коллизии и классификация алгоритмов антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id15" style={{ color: "red" }}>
              15. Случайные алгоритмы антиколлизии. Алгоритм АЛОХА и его
              модификации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id16" style={{ color: "red" }}>
              16. Случайные алгоритмы антиколлизии. Алгоритм стандарта Gen2.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id17" style={{ color: "red" }}>
              17. Детерминированные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id18" style={{ color: "red" }}>
              18. Пространственные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id19" style={{ color: "red" }}>
              19. Корреляционные алгоритмы антиколлизии.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="id20" style={{ color: "red" }}>
              20. Кибербезопасность RFID систем.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие/ Особенности сетей / Сенсорные сети">
        <Div>
          <p>
            <a name="o1" style={{ color: "red" }}>
              1. Классификация технологий интернета вещей.
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
            <a name="o2" style={{ color: "red" }}>
              2. Классификация характеристик инфокоммуникационных сетей?
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
            <a name="o3" style={{ color: "red" }}>
              3. Пространственные характеристики инфокоммуникаций.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="o4" style={{ color: "red" }}>
              4. Временные характеристики инфокоммуникаций.
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
            <a name="o5" style={{ color: "red" }}>
              5. Особенности инфраструктурных и сенсорных сетей.
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
            <a name="o6" style={{ color: "red" }}>
              6. Пространственные характеристики и модели сенсорных сетей.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="o7" style={{ color: "red" }}>
              7. Временные характеристики и стандарты сенсорных сетей.
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
            <a name="o8" style={{ color: "red" }}>
              8. Энергетические характеристики сенсорных сетей. Профиль
              энергопотребления умной вещи.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="o9" style={{ color: "red" }}>
              9. Системные методы повышения энергоэффективности сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o10" style={{ color: "red" }}>
              10. Связность сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o11" style={{ color: "red" }}>
              11. Показатели связности.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o12" style={{ color: "red" }}>
              12. Зависимость пространственных, временных и энергетических
              характеристик.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o13" style={{ color: "red" }}>
              13. Сравнение P2P и сенсорных сетей?
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="o14" style={{ color: "red" }}>
              14. Самоорганизация сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Эталонные модели интернета вещей">
        <Div>
          <p>
            <a name="e1" style={{ color: "red" }}>
              1. Классификация устройств интернета вещей.
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
            <a name="e2" style={{ color: "red" }}>
              2. Взаимосвязь Устройств и физических вещей (МСЭ-T Y.2060)
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
            <a name="e3" style={{ color: "red" }}>
              3. Взаимодействие Устройств интернета вещей
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="e4" style={{ color: "red" }}>
              4. Общие требования к интернету вещей
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
            <a name="e5" style={{ color: "red" }}>
              5. Общий принцип построения многоуровневых моделей при
              стандартизации взаимодействия открытых систем
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
            <a name="e6" style={{ color: "red" }}>
              6. Эталонная модель интернета вещей МСЭ-Т. Возможности 3-го и 4-го
              уровней.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="e7" style={{ color: "red" }}>
              7. Эталонная модель интернета вещей МСЭ-Т. Возможности 1-го и 2-го
              уровней.
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
            <a name="e8" style={{ color: "red" }}>
              8. Эталонная модель интернета вещей МСЭ-Т. Возможности управления
              и обеспечения безопасности.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="e9" style={{ color: "red" }}>
              9. Экосистема интернета вещей
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e10" style={{ color: "red" }}>
              10. Бизнес-модели интернета вещей
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e11" style={{ color: "red" }}>
              11. Эталонная модель всемирного форума интернета вещей IWF.
              Предназначение модели.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e12" style={{ color: "red" }}>
              12. Характеристика 1-3 Уровней Эталонной модели IWF
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="e13" style={{ color: "red" }}>
              13. Характеристика 4-7 Уровней Эталонной модели IWF
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие / Протоколы">
        <Div>
          <p>
            <a name="p1" style={{ color: "red" }}>
              1. Общий принцип построения многоуровневых моделей при
              стандартизации взаимодействия открытых систем.
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
            <a name="p2" style={{ color: "red" }}>
              2. Эталонная модель интернета вещей (МСЭ-T Y.2060)
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
            <a name="p3" style={{ color: "red" }}>
              3. Общая характеристика стандартов IEEE 802.x.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="p4" style={{ color: "red" }}>
              4. Физический и канальный уровни IEEE 802.x.
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
            <a name="p5" style={{ color: "red" }}>
              5. Технологии расширения спектра сигнала.
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
            <a name="p6" style={{ color: "red" }}>
              6. Что такое модуляция, манипуляция, спектр сигнала?
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="p7" style={{ color: "red" }}>
              7. Основы частотной модуляции FSK (frequency shift key).
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
            <a name="p8" style={{ color: "red" }}>
              8. Основы аналоговой модуляции по амплитуде и фазе.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="p9" style={{ color: "red" }}>
              9. Векторные диаграммы манипуляций BPSK и OQPSK.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p10" style={{ color: "red" }}>
              10. Стандарт ieee 802.15.4. Физический уровень.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p11" style={{ color: "red" }}>
              11. Стандарт ieee 802.15.4. Подуровень MAC.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p12" style={{ color: "red" }}>
              12. Основы протокола множественного доступа CSMA-CA.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p13" style={{ color: "red" }}>
              13. Основные понятия технологий маршрутизации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p14" style={{ color: "red" }}>
              14. Базовые топологии сетей стандарта ieee 802.15.4.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p15" style={{ color: "red" }}>
              15. Классификация протоколов маршрутизации сенсорных сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p16" style={{ color: "red" }}>
              16. Открытые полосы частот согласно решения ГКРЧ.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p17" style={{ color: "red" }}>
              17. Общая характеристика диапазона LPD 433.075 -434.750 МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p18" style={{ color: "red" }}>
              18. Общая характеристика диапазона PMR 446.00625 - 446.09375 МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p19" style={{ color: "red" }}>
              19. Общая характеристика диапазона 868,7-869,2 МГц МГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p20" style={{ color: "red" }}>
              20. Общая характеристика диапазона 2,4 ГГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="p21" style={{ color: "red" }}>
              21. Общая характеристика диапазона 5 – 6 ГГц.
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Group title="Всепроникающие / Технологии">
        <Div>
          <p>
            <a name="tt1" style={{ color: "red" }}>
              1. Стандарты IEEE 802.x.
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
            <a name="tt2" style={{ color: "red" }}>
              2. Эфирные сети стандарта IEEE 802.x
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
            <a name="tt3" style={{ color: "red" }}>
              3. Стандарт IEEE 802.15.4. Физический уровень.5. Базовые топологии
              сетей стандарта IEEE 802.15.4.
            </a>
            <br></br>
            Осуществляется на 2ух метауровнях. <br></br>2)Идеальный - Смысл
            1)сигналы - физиологический уровень
          </p>
          <br></br>
          <p>
            <a name="tt4" style={{ color: "red" }}>
              4. Технология ZigBee.
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
            <a name="tt5" style={{ color: "red" }}>
              5. Технология Bluetooth стандарта IEEE 802.15.1. Версия 2.0 + EDR.
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
            <a name="tt6" style={{ color: "red" }}>
              6. Разделение каналов в технологии Bluetooth.
            </a>
            <br></br>
            Ширина полосы канала -Чем шире полоса, больше скорость передачи
            Скорость передачи данных – количество бит передаваемое в секунду
            Пропускная способность канала – максимальная скорость передачи
            данных, которую поддерживает канал.
          </p>

          <br></br>
          <p>
            <a name="tt7" style={{ color: "red" }}>
              7. Образование piconet и scatternet в технологии Bluetooth.
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
            <a name="tt8" style={{ color: "red" }}>
              8. Технология Bluetooth стандарта IEEE 802.15.1. Версия 5.0.
            </a>
            <br></br>
            Источник инф -> Передатчик -> канал(+ источники шума) -> приемник
            ->адресат
          </p>

          <br></br>
          <p>
            <a name="tt9" style={{ color: "red" }}>
              9. Технология WI-FI стандарта IEEE 802.11n.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt10" style={{ color: "red" }}>
              10. Основы технологии MIMO.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt11" style={{ color: "red" }}>
              11. Эфирные сети для города и сельской местности WIMAX и White
              Space .
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt12" style={{ color: "red" }}>
              12. Основные понятия технологий маршрутизации.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt13" style={{ color: "red" }}>
              14. Предпосылки создания протоколов маршрутизации для сенсорных
              сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt14" style={{ color: "red" }}>
              14. Предпосылки создания протоколов маршрутизации для сенсорных
              сетей.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt15" style={{ color: "red" }}>
              15. Протокол AODV (Ad hoc On Demand Distance Vector).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt16" style={{ color: "red" }}>
              16. Протокол LEACH (Low-Energy Adaptive Clustering Hierarchy).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt17" style={{ color: "red" }}>
              17. Протокол PEGASIS (Power-Efficient Gathering in Sensor
              Information System).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt18" style={{ color: "red" }}>
              18. Протоколы Hierarchical (иерархический) PEGASIS и BCDCP
              (Base-Station Controlled Dynamic Clustering Protocol).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt19" style={{ color: "red" }}>
              19. Технологии и дальнего радиуса действия для IoT (LPWAN -
              Low-Power Wide-Area Network).
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt20" style={{ color: "red" }}>
              20. Технология LoRaWAN.
            </a>
            <br></br>
            inerithybtrgiern
          </p>

          <br></br>
          <p>
            <a name="tt21" style={{ color: "red" }}>
              21. Технология «СТРИЖ».
            </a>
            <br></br>
            inerithybtrgiern
          </p>
        </Div>
      </Group>
      <br></br>
      <Button></Button>
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
