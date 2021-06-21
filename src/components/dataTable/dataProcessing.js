
// format distance data
function distanceFormat(dist){

    const distanceFormatter = new Intl.NumberFormat('en', {
        style: 'unit',
        unit: 'kilometer',
      });

      return distanceFormatter.format(dist);

}

export {distanceFormat}