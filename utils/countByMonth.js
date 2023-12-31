const contByMonth = (countUserByYear, Byattribut) => {
  const userCountsByMonth = {};

  countUserByYear.forEach((user) => {
    const attribut = user.getDataValue(Byattribut);

    const key = `${attribut}`;
    if (userCountsByMonth[key]) {
      userCountsByMonth[key]++;
    } else {
      userCountsByMonth[key] = 1;
    }
  });

  // Étape 3 : Générez un tableau d'objets avec les résultats.
  const userCountsArray = [];

  for (const key in userCountsByMonth) {
    if (userCountsByMonth.hasOwnProperty(key)) {
      var entry = {};
      if (Byattribut == "month") {
        entry = { month: key, count: userCountsByMonth[key] };
      }else if (Byattribut == "pageId") {
        entry = {page: key, count: userCountsByMonth[key]}
      }

      userCountsArray.push(entry);
    }
  }

  // Triez le tableau par mois (facultatif)
  userCountsArray.sort((a, b) => {
    return a.month - b.month;
  });

  return userCountsArray;
};

module.exports = contByMonth;
