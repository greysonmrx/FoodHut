import React from "react";
import {
  MdCreditCard,
  MdGroup,
  MdRestaurant,
  MdLocalShipping,
  MdMoreHoriz
} from "react-icons/md";
import { Line, Doughnut } from "react-chartjs-2";

import ProgressBar from "../../components/ProgressBar";

import {
  Container,
  Content,
  InfoCard,
  LineChartCard,
  IconContent,
  Stats,
  Options,
  Header,
  ProductCard,
  ProductContent,
  OrdersContent,
  UsersContent,
  Profile,
  Scroll
} from "./styles";

import Pizza from "../../assets/pizza.png";

export default function Dashboard() {
  function handleData(canvas) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 400, 0, 0);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(1, "rgba(246, 84, 13, 0.3)");

    return {
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      datasets: [
        {
          label: "Pedidos Mensais",
          data: [12, 19, 3, 5, 2, 9, 36, 25, 2, 8, 1, 4],
          borderColor: "#f6540d",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f6540d",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradient,
          borderWidth: 2
        }
      ]
    };
  }

  return (
    <Container>
      <Scroll>
        <Content>
          <InfoCard>
            <IconContent color="#f6540d">
              <MdCreditCard />
            </IconContent>
            <Stats>
              <p>R$3,256</p>
              <span>Lucro total</span>
            </Stats>
            <Options>
              <MdMoreHoriz />
            </Options>
          </InfoCard>
          <InfoCard>
            <IconContent color="#4BBAFF">
              <MdGroup />
            </IconContent>
            <Stats>
              <p>394</p>
              <span>Total de usuários</span>
            </Stats>
            <Options>
              <MdMoreHoriz />
            </Options>
          </InfoCard>
          <InfoCard>
            <IconContent color="#6F3BDD">
              <MdRestaurant />
            </IconContent>
            <Stats>
              <p>1,002</p>
              <span>Pedidos feitos</span>
            </Stats>
            <Options>
              <MdMoreHoriz />
            </Options>
          </InfoCard>
          <InfoCard>
            <IconContent color="#F9547F">
              <MdLocalShipping />
            </IconContent>
            <Stats>
              <p>32 minutos</p>
              <span>Duração média</span>
            </Stats>
            <Options>
              <MdMoreHoriz />
            </Options>
          </InfoCard>
        </Content>
        <Content>
          <LineChartCard>
            <Header>
              <p>Pedidos mensais</p>
            </Header>
            <Line
              data={handleData}
              options={{
                maintainAspectRatio: false,
                legend: { display: false },
                tooltips: {
                  bodySpacing: 4,
                  mode: "nearest",
                  intersect: 0,
                  position: "nearest",
                  xPadding: 10,
                  yPadding: 10,
                  caretPadding: 10
                },
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        padding: 20
                      },
                      gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        drawBorder: false,
                        lineWidth: 0.8
                      }
                    }
                  ],
                  xAxes: [
                    {
                      ticks: {
                        padding: 20
                      },
                      gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                      }
                    }
                  ]
                },
                layout: {
                  padding: { left: 0, right: 20, top: 20, bottom: 20 }
                }
              }}
            />
          </LineChartCard>
          <ProductCard>
            <Header>
              <p>Produto mais vendido</p>
            </Header>
            <ProductContent>
              <img src={Pizza} alt="Pizza" />
              <p>Pizza de calabresa</p>
              <ProgressBar progress={71} />
              <b>Quantida de pedidos: 712</b>
            </ProductContent>
          </ProductCard>
        </Content>
        <Content>
          <OrdersContent>
            <Header>
              <p>Status dos pedidos</p>
            </Header>
            <Doughnut
              data={{
                labels: ["Aceito", "Cancelado"],
                datasets: [
                  {
                    label: "Status dos pedidos",
                    data: [903, 99],
                    backgroundColor: ["#f6540d", "rgba(246, 84, 13, 0.2)"],
                    hoverBorderColor: ["#FFFFFF", "#FFFFFF"],
                    borderWidth: 5
                  }
                ]
              }}
              options={{
                maintainAspectRatio: false,
                legend: {
                  position: "bottom",
                  align: "center",
                  labels: {
                    usePointStyle: true,
                    fontStyle: "bold",
                    fontFamily: "'Roboto', sans-serif",
                    fontColor: "#212121",
                    fontSize: 14,
                    padding: 30,
                    boxWidth: 30
                  }
                },
                responsive: true,
                layout: {
                  padding: { left: 0, right: 20, top: 20, bottom: 20 }
                }
              }}
            />
          </OrdersContent>
          <UsersContent>
            <Header>
              <p>Clientes mais ativos</p>
            </Header>
            <table>
              <thead>
                <tr>
                  <th>Usuário</th>
                  <th>Último pedido</th>
                  <th>Total gasto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Profile>
                      <img
                        src="https://api.adorable.io/avatar/40/José Francisco.png"
                        alt="José Francisco"
                      />
                      <span>José Francisco</span>
                    </Profile>
                  </td>
                  <td>Há quatro dias</td>
                  <td>R$503.50</td>
                </tr>
                <tr>
                  <td>
                    <Profile>
                      <img
                        src="https://api.adorable.io/avatar/40/Maria Rita.png"
                        alt="Maria Rita"
                      />
                      <span>Maria Rita</span>
                    </Profile>
                  </td>
                  <td>Há três horas</td>
                  <td>R$351.00</td>
                </tr>
                <tr>
                  <td>
                    <Profile>
                      <img
                        src="https://api.adorable.io/avatar/40/Camila Freitas.png"
                        alt="Camila Freitas"
                      />
                      <span>Camila Freitas</span>
                    </Profile>
                  </td>
                  <td>Há um mês</td>
                  <td>R$124.00</td>
                </tr>
                <tr>
                  <td>
                    <Profile>
                      <img
                        src="https://api.adorable.io/avatar/40/Felipe Dias.png"
                        alt="Felipe Dias"
                      />
                      <span>Felipe Dias</span>
                    </Profile>
                  </td>
                  <td>Há duas semanas</td>
                  <td>R$75.50</td>
                </tr>
              </tbody>
            </table>
          </UsersContent>
        </Content>
      </Scroll>
    </Container>
  );
}
