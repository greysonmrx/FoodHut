import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import {
  Container,
  SearchContent,
  InputContainer,
  ActionContent,
  TableContent
} from "./styles";

import Action from "../../components/Action";
import Table from "../../components/Table";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: "#01",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/José Francisco.png" />
      ),
      name: "José Francisco",
      phone: "(82) 9 9761-8923",
      cep: "36390-120",
      date: "10 de setembro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("1")} />
        </ActionContent>
      )
    },
    {
      id: "#02",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Carlos Dias Rocha.png" />
      ),
      name: "Carlos Dias Rocha",
      phone: "(35) 9 3884-6916",
      cep: "37010-050",
      date: "03 de março 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("2")} />
        </ActionContent>
      )
    },
    {
      id: "#03",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Gustavo Cunha Alves.png" />
      ),
      name: "Gustavo Cunha Alves",
      phone: "(61) 9 6582-5071",
      cep: "72835-010",
      date: "18 de janeiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("3")} />
        </ActionContent>
      )
    },
    {
      id: "#04",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Isabella Cardoso Almeida.png" />
      ),
      name: "Isabella Cardoso Almeida",
      phone: "(21) 9 7773-2898",
      cep: "26340-500",
      date: "02 de maio 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("4")} />
        </ActionContent>
      )
    },
    {
      id: "#05",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Enzo Gomes Pinto.png" />
      ),
      name: "Enzo Gomes Pinto",
      phone: "(31) 9 6756-9206",
      cep: "33825-210",
      date: "20 de janeiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("5")} />
        </ActionContent>
      )
    },
    {
      id: "#06",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Nicolash Rocha Rodrigues.png" />
      ),
      name: "Nicolash Rocha Rodrigues",
      phone: "(51) 9 6559-3389",
      cep: "93228-010",
      date: "15 de fevereiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("6")} />
        </ActionContent>
      )
    },
    {
      id: "#07",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/José Francisco.png" />
      ),
      name: "José Francisco",
      phone: "(82) 9 9761-8923",
      cep: "36390-120",
      date: "10 de setembro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("7")} />
        </ActionContent>
      )
    },
    {
      id: "#08",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Carlos Dias Rocha.png" />
      ),
      name: "Carlos Dias Rocha",
      phone: "(35) 9 3884-6916",
      cep: "37010-050",
      date: "03 de março 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("8")} />
        </ActionContent>
      )
    },
    {
      id: "#09",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Gustavo Cunha Alves.png" />
      ),
      name: "Gustavo Cunha Alves",
      phone: "(61) 9 6582-5071",
      cep: "72835-010",
      date: "18 de janeiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("9")} />
        </ActionContent>
      )
    },
    {
      id: "#10",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Isabella Cardoso Almeida.png" />
      ),
      name: "Isabella Cardoso Almeida",
      phone: "(21) 9 7773-2898",
      cep: "26340-500",
      date: "02 de maio 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("10")} />
        </ActionContent>
      )
    },
    {
      id: "#11",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Enzo Gomes Pinto.png" />
      ),
      name: "Enzo Gomes Pinto",
      phone: "(31) 9 6756-9206",
      cep: "33825-210",
      date: "20 de janeiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("11")} />
        </ActionContent>
      )
    },
    {
      id: "#12",
      avatar: (
        <img src="https://api.adorable.io/avatar/25/Nicolash Rocha Rodrigues.png" />
      ),
      name: "Nicolash Rocha Rodrigues",
      phone: "(51) 9 6559-3389",
      cep: "93228-010",
      date: "15 de fevereiro 2019",
      action: (
        <ActionContent>
          <Action type="delete" onClick={() => handleDeleteUser("12")} />
        </ActionContent>
      )
    }
  ]);

  function handleSearchUsers(text) {
    console.log(`Fetching users starting with the name ${text}`);
  }

  function handleDeleteUser(id) {
    console.log(`Deleting user with id ${id}`);
  }

  function loadUsers(page) {
    console.log(`Fetching users using page ${page}`);
  }

  return (
    <Container>
      <h1>Usuários</h1>
      <SearchContent>
        <InputContainer>
          <FiSearch color="#b1b1b3" size={22} />
          <input
            placeholder="Procurar usuários"
            onChange={field => handleSearchUsers(field.target.value)}
          />
        </InputContainer>
      </SearchContent>
      <TableContent>
        <Table
          onClick={loadUsers}
          columns={[
            "ID",
            "Avatar",
            "Nome",
            "Telefone",
            "CEP",
            "Data de criação",
            "Ações"
          ]}
          data={users}
          pagination={{
            currentPage: 1,
            totalPages: 10,
            sizePerPage: 12,
            showTotalSize: 332,
            canNextPage: true,
            canPreviousPage: false
          }}
        />
      </TableContent>
    </Container>
  );
}
