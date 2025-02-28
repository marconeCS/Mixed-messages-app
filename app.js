const subject = ['The cat','A teacher','My friend','The sun','A scientist','The dog','An artist','The president','A musician','The bird'];
const predicate = ['eats','writes','sings','runs','paints','solves','watches','builds','studie','tells'];
const object = ['the cake','a novel','a melody','a movie','a building','a masterpiece','the lesson','an adventure'];

const randomize = arr => {
  let arrIndex = Math.floor(Math.random() * arr.length);
    return arr[arrIndex];
}
