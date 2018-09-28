const CELL_TIME = 20;
const START_TIME = '2017-01-06T17:00Z';
const CELL_HOUR = ['17','18','19','20','21','22','23','00'];
const getMinutesDiference = (di = new Date(), df = new Date()) => {
  const st = new Date(START_TIME);
  const ds = di.getTime() - st.getTime();
  const seconds = (df.getTime() - di.getTime())/1000;
  const minutes = (seconds < 0 ? 0:seconds)/60 + (ds < 0 ? ds/1000/60:0);
  return minutes;
}
const getTime = (time) => {
  const hours = new Date(time).getHours();
  const minutes = new Date(time).getMinutes();
  return `${hours + 2}:${minutes == 0 ? '00' : minutes}`;
}
const formatCurrency = (number, decimal = ',') => {
  let d = '99';
  let r = '00';
  if (number/1000 >= 1) {
    d = parseInt(number/100);
    r = number%100;
  } else {
    d = number;
    r = '00';
  }
  return `R$ ${d}${decimal}${r == 0 ? '00':r}`;
}

export {
  CELL_TIME,
  CELL_HOUR,
  START_TIME,
  getTime,
  getMinutesDiference,
  formatCurrency
}