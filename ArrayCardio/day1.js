
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
    ];

    const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
        let born1500 = inventors.filter((inventor,idx,arr)=>{
          return (inventor.year >= 1500 && inventor.year < 1600);
        });
      console.table(born1500);
    // Array.prototype.map()
    // 2. Give us an array of the inventory first and last names
        let fullNames = inventors.map((inventor)=>{
          return inventor.first +' '+ inventor.last;
        });
        console.log(fullNames);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
        let oldToYoung = inventors.sort((a,b)=> a.year > b.year ? 1:-1);
        console.log(oldToYoung);
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
        let yearTotal = inventors.reduce((total, inventor)=>{
          return total + (inventor.passed - inventor.year)
        },0);

        console.log(yearTotal);
    // 5. Sort the inventors by years lived
        let yearsLivedSort = inventors.sort((a,b)=>{
           let last = a.passed - a.year;
           let first = b.passed - b.year;
           return last > first ? 1:-1;
         });
        console.table(yearsLivedSort);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

      let category = Array.from(document.querySelectorAll('.mw-category a'))
                      .map(category => category.textContent)
                      .filter(streetName => streetName.includes('de'));
      console.log(category);

    // 7. sort Exercise
    // Sort the people alphabetically by last name
      let lastNameSort = people.sort((a,b)=>{
          let [aLast, aFirst] = a.split(',');
          let [bLast, bFirst] = b.split(',');
          return aLast > bLast ? 1:-1;
      });
      console.log(lastNameSort);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      let inst = data.reduce((obj,item)=>{
        if(!obj[item]){
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      },{});
      console.log(inst);
