const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const useSortByDay = () => {
  const sortDays = function (a, b) {
    a = days.indexOf(a[0])
    b = days.indexOf(b[0])
    return a < b ? 0 : 1
  }

  const sortByDay = (obj) => {
    return Object.fromEntries(Object.entries(obj).sort(sortDays))
  }

  return { sortByDay }
}

export default useSortByDay
