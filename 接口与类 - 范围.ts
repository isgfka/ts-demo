/**
 * 定义的User应该是UserAccount的子集
 */

interface User {
  name: string;
  c: number;
}

class UserAccount {
  name: string;
  id: number;
  c: number

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);