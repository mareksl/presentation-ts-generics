import example1 from "./Functions_1.example";
import example2 from "./Functions_2.example";
import example3 from "./Functions_3.example";
import example4 from "./Functions_4.example";
import example5 from "./Functions_5.example";
import example6 from "./Functions_6.example";
import example7 from "./Functions_7.example";
import types1 from "./Types_1.example";
import types2 from "./Types_2.example";
import types3 from "./Types_3.example";
import types4 from "./Types_4.example";
import types5 from "./Types_5.example";
import types6 from "./Types_6.example";
import react1 from "./React_1.example";

export interface File {
  value: string;
  language?: string;
  name: string;
}

const files = {
  example1: { value: example1, name: "example1.ts" },
  example2: { value: example2, name: "example2.ts" },
  example3: { value: example3, name: "example3.ts" },
  example4: { value: example4, name: "example4.ts" },
  example5: { value: example5, name: "example5.ts" },
  example6: { value: example6, name: "example6.ts" },
  example7: { value: example7, name: "example7.ts" },
  types1: { value: types1, name: "types1.ts" },
  types2: { value: types2, name: "types2.ts" },
  types3: { value: types3, name: "types3.ts" },
  types4: { value: types4, name: "types4.ts" },
  types5: { value: types5, name: "types5.ts" },
  types6: { value: types6, name: "types6.ts" },
  react1: { value: react1, name: "react1.ts" },
};

export default files;
