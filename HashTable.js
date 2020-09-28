class HashTable {
  // default bucket size 42
  constructor(size=12) {
    this.buckets=new Array(size)
    this.size=size
  }

  hash(key) {
    return key.toString().length%this.size;
  }

  set(key, value) {
    let index=this.hash(key);
    if(!this.buckets[index]) {
      this.buckets[index]=[];
    }
    this.buckets[index].push([key, value])
    return index

  }


  get(key) {

    // index of the bucket
    let index=this.hash(key);

    // if there is no bucket
    if(!this.buckets[index]) return null

    for(let bucket of this.buckets[index]) {
      // if key  matches
      if(bucket[0]===key) {
        // value
        return bucket[1]
      }
    }
  }

}


function main() {
  const lotr=new HashTable();

  // lotr.MAX_LOAD_RATIO=.5;
  // lotr.SIZE_RATIO=3;
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("Ringbearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  lotr.get('Hobbit')
  console.log(lotr.get('Hobbit'));
  console.log(JSON.stringify(lotr.get('Maiar')));
  console.log(JSON.stringify(lotr))
}

main();
