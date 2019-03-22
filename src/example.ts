// Types inferred
// let x = 1;
// x = 'string';


// Types inferred in objects
// let obj = { x: 1 };
// obj.x = 'test';


// Types declared
// let x: number = 1;
// x = 'test';


// Types declared in objects
// let obj = { x: 1 } as { x: number };
// or
// type ObjectType = {
//   x: number,
// };
// let obj: ObjectType = { x: 1 };
// obj.x = 'test';


// Union types
// let x: (number | null) = 1;
// x = null // ok


// Array types
// let x: string[] = ['test'];
// x = []; // ok


// Enum
// enum States {
//   active = 'active',
//   inactive = 'inactive',
//   archived = 'archived',
// }

// or

// type States = 'active' | 'inactive' | 'archived';

// function setState(newState: States) {
//   console.log(newState);
// }
