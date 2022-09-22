<template>
  <main class="column-center">
    <h1>Table test case</h1>
    <button class="addRow" @click="addRow">Ajouter une ligne à la table</button>
    <table>
      <thead>
        <tr>
          <th @click="sortBy('id')">
            <button class="noButtonStyling">ID</button>
          </th>
          <th @click="sortBy('name')">
            <button class="noButtonStyling">name</button>
          </th>
          <th @click="sortBy('rank')">
            <button class="noButtonStyling">Rank</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in sortedTableData"
          :key="data.id"
          @click="select(data)"
          :class="data.selected ? 'selected' : ''"
        >
          <td>{{ data.id }}</td>
          <td @dblclick="changeTableData" @blur="(e) => saveInput(e, data, 'name')">
            {{ data.name }}
          </td>
          <td @dblclick="changeTableData" @blur="(e) => saveInput(e, data, 'rank')">
            {{ data.rank }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="deleteButton" @click="deleteRow" v-if="selectedLines">
      Supprimer {{ selectedLines > 1 ? "les " : "la" }} ligne séléctionnée{{
        selectedLines > 1 ? "s " : ""
      }}
    </button>
    <div class="changeButtonsDiv">
      <button class="changesButton" v-if="tableHasBeenModified">
        Confirmer les changements
      </button>
      <button
        class="revertChanges changesButton"
        v-if="tableHasBeenModified"
        @click="revertChanges"
      >
        Annuler les changements
      </button>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      initialTableData: [
        {
          id: 1,
          name: "Ala",
          rank: 6,
          selected: false,
        },
        {
          id: 2,
          name: "Bla",
          rank: 5,
          selected: false,
        },
        {
          id: 3,
          name: "Cla",
          rank: 4,
          selected: false,
        },
        {
          id: 4,
          name: "Dla",
          rank: 3,
          selected: false,
        },
        {
          id: 5,
          name: "Ela",
          rank: 2,
          selected: false,
        },
        {
          id: 6,
          name: "Fla",
          rank: 1,
          selected: false,
        },
      ],
      tableData: [
        {
          id: 1,
          name: "Ala",
          rank: 6,
          selected: false,
        },
        {
          id: 2,
          name: "Bla",
          rank: 5,
          selected: false,
        },
        {
          id: 3,
          name: "Cla",
          rank: 4,
          selected: false,
        },
        {
          id: 4,
          name: "Dla",
          rank: 3,
          selected: false,
        },
        {
          id: 5,
          name: "Ela",
          rank: 2,
          selected: false,
        },
        {
          id: 6,
          name: "Fla",
          rank: 1,
          selected: false,
        },
      ],
      currentSort: "id",
      currentSortDir: "asc",
      tableHasBeenModified: false,
    };
  },
  computed: {
    sortedTableData() {
      const sortedTable = this.tableData;
      return sortedTable.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    selectedLines() {
      return this.tableData.filter((row) => {
        return row.selected == true;
      }).length;
    },
  },
  methods: {
    select(row) {
      row.selected = !row.selected;
    },
    changeTableData(e) {
      e.currentTarget.setAttribute("contenteditable", true);
      e.currentTarget.focus();
    },
    saveInput(e, data, category) {
      e.currentTarget.setAttribute("contenteditable", false);
      if (data[category] != e.currentTarget.textContent) {
        console.log(data[category]);
        console.log(e.currentTarget.textContent);
        this.tableHasBeenModified = true;
      }
      data[category] = e.currentTarget.textContent;
    },
    revertChanges() {
      this.tableData = [...this.initialTableData];
      this.tableHasBeenModified = false;
    },
    addRow() {
      this.tableData.push({
        id: "---",
        name: "---",
        rank: "---",
        selected: false,
      });
      this.tableHasBeenModified = true;
    },
    deleteRow() {
      this.tableData = this.tableData.filter((row) => {
        return row.selected !== true;
      });
      this.tableHasBeenModified = true;
    },
    sortBy(category) {
      //if categrory == current sort, reverse
      if (category === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      } else {
        this.currentSort = category;
        this.currentSortDir = "asc";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10vh;
  }
  table {
    width: 60%;
    margin-bottom: 2vh;
    tr {
      border: 0.5px solid black;
      position: relative;
      .noButtonStyling {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      th,
      td {
        border: 0.5px solid black;
        width: 33.33%; /* Older browsers fallback */
        width: calc(100% / 3);
        height: 3vh;
        vertical-align: middle;
        text-align: center;
      }
      th {
        background-color: lightblue;
      }
    }
    tbody > tr:hover,
    .selected {
      background-color: lightyellow;
    }
    .selected {
      background-color: lightyellow;
    }
  }
  .changeButtonsDiv {
    display: flex;
    column-gap: 5px;
    .changesButton {
      background-color: green;
      color: white;
      height: 4vh;
      width: 20vw;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
    .revertChanges {
      background-color: red;
    }
  }
  .deleteButton {
    background-color: red;
    color: white;
    height: 4vh;
    width: 20vw;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 5px;
  }
}
</style>