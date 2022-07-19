(() => {

  // Создаю форму
  function createHandbookForm() {
    let form = document.createElement('form');
    let boxForFullName = document.createElement('div')
    let boxForOtherInput = document.createElement('div')
    let name = document.createElement('input');
    let surname = document.createElement('input');
    let middleName = document.createElement('input');
    let inputFaculty = document.createElement('input');
    let inputDOB = document.createElement('input');
    let inputStartDate = document.createElement('input');
    let button = document.createElement('button')


    // box inputs for alert
    let box1 = document.createElement('div');
    let box2 = document.createElement('div');
    let box3 = document.createElement('div');
    let box4 = document.createElement('div');
    let box5 = document.createElement('div');
    let box6 = document.createElement('div');

    box1.classList.add('box-input')
    box2.classList.add('box-input')
    box3.classList.add('box-input')
    box4.classList.add('box-input')
    box5.classList.add('box-input')
    box6.classList.add('box-input')
    // _______________________________________

    form.classList.add('input-group');
    boxForFullName.classList.add('box-full-name');
    boxForOtherInput.classList.add('box-other-input');

    name.classList.add('input-value', 'full-name', 'lenght-value');
    surname.classList.add('input-value', 'full-name', 'lenght-value');
    middleName.classList.add('input-value', 'full-name', 'lenght-value');
    inputFaculty.classList.add('input-value', 'lenght-value');
    inputDOB.classList.add('input-value', 'numerical-value', 'DOB');
    inputDOB.setAttribute('id', 'DOB');
    inputStartDate.classList.add('input-value', 'numerical-value', 'start-date');
    inputStartDate.setAttribute('id', 'start-date');

    name.placeholder = 'Имя'
    surname.placeholder = 'Фамилия'
    middleName.placeholder = 'Отчество'
    inputFaculty.placeholder = "Факультет"
    inputDOB.placeholder = "Дата рождения"
    inputStartDate.placeholder = "Год обучения"

    // name.required = true
    // surname.required = true
    // middleName.required = true
    // inputFaculty.required = true
    // inputDOB.required = true
    // inputStartDate.required = true

    inputDOB.type = 'text';
    inputDOB.setAttribute('onfocus', `(this.type='date')`);
    inputDOB.setAttribute('onblur', `(this.type='text')`);
    inputDOB.setAttribute('min', '1900-01-01')

    // inputStartDate.type = 'number'

    button.classList.add('btn');
    button.classList.add('btn-active');
    button.textContent = 'Добавить студента'
    button.setAttribute("disabled", "disabled")


    box1.append(surname)
    box2.append(name)
    box3.append(middleName)
    box4.append(inputFaculty)
    box5.append(inputDOB)
    box6.append(inputStartDate)

    boxForFullName.append(box1);
    boxForFullName.append(box2);
    boxForFullName.append(box3);

    boxForOtherInput.append(box4)
    boxForOtherInput.append(box5)
    boxForOtherInput.append(box6)

    form.append(boxForFullName);
    form.append(boxForOtherInput);
    // form.append(inputFaculty);
    // form.append(inputDOB);
    // form.append(inputStartDate);
    form.append(button)


    return {
      form,
      boxForFullName,
      boxForOtherInput,
      name,
      surname,
      middleName,
      inputFaculty,
      inputDOB,
      inputStartDate,
      button,
    }
  }

  // Создаю список

  function createHandbookList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list
  }

  // создаю заголовки списков
  function createHandbookFirstItem() {
    let idCounter = 1;
    let firstItem = document.createElement('li')
    firstItem.classList.add('first-item')


    let infoStudent = {
      fullName: "ФИО",
      faculty: "Факультет",
      DOB: "Дата рождения",
      startDate: "Годы обучения"
    }

    Object.values(infoStudent).forEach((value) => {
      const studentInformation = document.createElement('p');
      studentInformation.classList.add('element', 'header')
      studentInformation.setAttribute('id', `header${idCounter}`);
      studentInformation.textContent = value;
      idCounter = idCounter + 1
      firstItem.append(studentInformation)
    });


    return {
      firstItem,
    }
  }
  // создаю заголовки списков
  function createHandbookFilterInputs() {
    let idCounter = 1;

    let filterItems = document.createElement('li')
    filterItems.classList.add('first-item')

    let formFilters = document.createElement('form')
    formFilters.classList.add('form-filter')

    let infoStudent = {
      fullName: "поиск по: ФИО",
      faculty: "поиск по: Факультету",
      DOB: "поиск по: Дате рождения",
      startDate: "поиск по: Году обучения"
    }

    Object.values(infoStudent).forEach((value) => {
      const studentInformation = document.createElement('input');
      studentInformation.classList.add('input-filter')
      studentInformation.setAttribute('id', `filter-${idCounter}`);
      studentInformation.placeholder = value;
      idCounter = idCounter + 1
      formFilters.append(studentInformation)
    });

    filterItems.append(formFilters)
    return {
      filterItems,
    }
  }

  // создаю список студентов
  function createHandbookItem(fullInfo, title) {

    let item = document.createElement('li')
    item.classList.add('item')


    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('button-delete')

    let blockForIcon = document.createElement('span')
    blockForIcon.classList.add('icon-close')
    buttonDelete.append(blockForIcon)

    let el = []

    let entries = Object.entries(fullInfo)

    let valuePart = ''

    for (let entry of entries) {
      // проходим без объекта timeStamp
      if (entry[0] != 'timeStamp') {
        if (entry[0] != 'fullName') {

          const studentInformation = document.createElement('p');
          studentInformation.classList.add('element')
          studentInformation.textContent = entry[1];

          item.append(studentInformation)

        } else {
          // проходим только для ФИО

          let valueFullName = Object.values(entry[1])
          for (let value of valueFullName) {
            valuePart = valuePart + '\n' + value;
          }
          const studentInformationFullName = document.createElement('p');
          studentInformationFullName.classList.add('element')
          studentInformationFullName.textContent = valuePart;

          item.append(studentInformationFullName)
        }
      }
    }
    // создаю событие на клик кнопки "Удалить"
    buttonDelete.addEventListener('click', function () {
      removeStudent(item)
    })

    // функция удаления объекта на клик кнопки "Удалить"
    function removeStudent(item) {
      let filterArrows = []
      const getArry = JSON.parse(localStorage.getItem(title)) || [];
      if (confirm('Вы уверены?')) {
        for (let el of getArry) {
          filterArrows = getArry;
          filterArrows = filterArrows.filter(el => el.timeStamp != fullInfo.timeStamp)
        }
        localStorage.setItem(title, JSON.stringify(filterArrows))
        item.remove();
      }
    }


    item.append(buttonDelete)

    return {
      item,
      el,
      fullInfo,
    }
  }

  // создаю дефолтного студента_______________________________________________________

  function createDefoultItem(title, testName, items) {

    // Добавляю в Local Storage __________________

    items.push(testName)
    localStorage.setItem(title, JSON.stringify(items))
  }

  // Функция создания нового студента на клик
  function createNewStudent(title, items, handbookForm, handbookList, storage, outputsDOBvalue, reverseDOBOutput, outputDate) {
    // debugger
    // console.log(outputsDOB, 'kek')

    let formValue = {
      fullName: {
        surname: handbookForm.surname.value,
        name: handbookForm.name.value,
        middleName: handbookForm.middleName.value,
      },
      faculty: handbookForm.inputFaculty.value,
      DOB: reverseDOBOutput + '\n' + '(' + outputsDOBvalue + '\n' + 'лет' + ')',
      startDate: handbookForm.inputStartDate.value + '\n' + outputDate,
      timeStamp: Date.now(),
    }
    // добавляю студента

    let handbookItemAdd = createHandbookItem(formValue, title)

    handbookList.append(handbookItemAdd.item)
    items.push(formValue)

    localStorage.setItem(title, JSON.stringify(items))

  }

  // рассчитываю дату рождения _____________________________
  function outputDOB() {
    // debugger
    let me = {}
    let years = 0
    let dateDOB = Date.parse(document.querySelector('#DOB').value)
    if (!isNaN(Number(dateDOB))) {

      let date = new Date(dateDOB).toISOString().substring(0, 10)
      let day = date.substring(8, 10)
      let mounth = date.substring(5, 7)
      let year = date.substring(0, 4)
      years = Number(year);

      me = {
        birthDay: { day: day, month: mounth, year: year },
        reverseDOBOutput: function () {
          return this.birthDay.day + '.' + this.birthDay.month + '.' + this.birthDay.year
        },
        getAge: function () {
          let now = new Date();
          let born = new Date(
            this.birthDay.year,
            this.birthDay.month,
            this.birthDay.day,
          );
          let diffInMilliseconds = now.getTime() - born.getTime();
          return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25)
        }
      }
    }
    // присваиваю класс для проверки валидации
    let valdate = document.querySelector('#DOB')

    if (years > 1900 && years < 2022 && years != 0) {
      // console.log(years, 'years')
      valdate.classList.remove('red')
      valdate.classList.add('green')
    } else {
      // console.log(valdate, 'valdate yes')
      valdate.classList.remove('green')
      valdate.classList.add('red')

    }
    return {
      me,
      years,
    }
  }


  // Валидация (Делаю первую букву заглавной)
  // Если все верно, включаю кнопку
  function parseEmployeesData(valdate, handbookForm) {

    if (valdate !== document.querySelector('#DOB') && valdate !== document.querySelector('#start-date')) {

      if (valdate.value != []) {

        // Берем 1 букву, делаем заглавной, соединяем начальное значение без первой буквы
        let result = valdate.value.charAt(0).toUpperCase() + valdate.value.slice(1);
        valdate.value = result.replace(/[^a-zа-яё]/gi, '');
        if (valdate.value.length < 3 && valdate.value !== "" || valdate.value.length > 15) {
          valdate.classList.remove('green')
          valdate.classList.add('red')
          valdate.classList.add('red-name-and-facult')

        } else {
          // console.log(valdate, 'valdate yes')
          valdate.classList.add('green')
          valdate.classList.remove('red')
        }
      } else {
        console.log('есть пустое поле')
      }
    } else {
      return
    }
  }

  //Валидация года обучения ___________________
  function calculateStartDate(valdate, outputsDOBvalue) {
    let outputStartDate;
    if (valdate == document.querySelector('#start-date')) {
      // debugger

      let valueForalert
      let yearStudent = Number(outputsDOBvalue.years + 18);

      console.log(yearStudent, 'yearStudent')
      let nowDate = new Date().getFullYear();
      console.log(nowDate, 'nowDate')

      let valueStartDate = document.querySelector('#start-date').value;
      valdate.value = valueStartDate.replace(/[^\d-]/gi, '')


      let firstDate = Number(valueStartDate.slice(0, 4));
      let middleSymbol = valueStartDate.slice(4, 5);
      let secondDate = Number(valueStartDate.slice(5, 9));


      let valueStartDateNumber = Number(valueStartDate)

      switch (true) {
        case (yearStudent > firstDate):
          valdate.classList.remove('green')
          valdate.classList.add('red')
          console.log('значения меньше 18-летия');
          // поправить для выода Ошибки
          // valueForalert = 'значения меньше 18-летия'
          break
        case (firstDate + 4 !== secondDate):
          valdate.classList.remove('green')
          valdate.classList.add('red')
          console.log('диапазон меньше или больше 4 лет диапазон')
          break
        case (secondDate >= nowDate):
          valdate.classList.add('green')
          valdate.classList.remove('red')
          outputStartDate = nowDate - firstDate + '\n' + 'курс'
          if (outputStartDate.slice(0, 1) >= 0) {
            outputStartDate = 1 + '\n' + 'курс'
          }
          else {
            valdate.classList.remove('green')
            valdate.classList.add('red')

          }
          console.log(outputStartDate, 'курс')
          break
        case (secondDate <= nowDate):
          valdate.classList.add('green')
          valdate.classList.remove('red')
          outputStartDate = '\n' + 'закончил'
          break
        default:
          console.log('невалидная форма')
          valdate.classList.add('green')
          valdate.classList.remove('red')
          break;
      }
    }
    return outputStartDate
  }

  // вывод alert

  function checkInputAlert(valdate) {
    let alert = document.createElement('p')
    alert.classList.add('alert')
    document.querySelectorAll('.alert').forEach(function (alert) {
      alert.remove()
    })

    switch (true) {
      case (valdate.classList.contains('green')):
        alert.remove()
        break
      case (valdate.classList.contains('lenght-value')):
        alert.textContent = 'Не меньше 3-х и не больше 10 символов'
        valdate.after(alert)
        break
      case (valdate.classList.contains('DOB')):
        alert.textContent = 'Дата не может быть меньше 1900 и не больше нынешней'
        valdate.after(alert)
        break
      case (valdate.classList.contains('start-date')):
        alert.textContent = 'Формат даты: 2000-2004'
        alert.style.width = '100px'
        alert.style.right = '-130px'
        valdate.after(alert)
        break
    }

  }

  // Если валидация прошла то включаю кнопку

  function onButton(handbookForm) {
    let selectorOnButton = document.querySelectorAll('.green')


    // проверка длины текстовых полей и даты рождения от 1900
    if (selectorOnButton.length === 6) {
      // включаю кнопку при всех условиях
      handbookForm.button.removeAttribute("disabled", "kek")
      // console.log(handbookForm.button)
    } else {

      handbookForm.button.setAttribute("disabled", "disabled")
    }
  }

  // Сортировка - Определяет какую вид сортировки нужен

  function sortSwitch(itemsForSort, storage, resultOutput, title) {
    const items = JSON.parse(localStorage.getItem(title));
    itemsForSort.addEventListener('click', function () {
      let itemHeader1 = document.getElementById('header1')
      let itemHeader2 = document.getElementById('header2')
      let itemHeader3 = document.getElementById('header3')
      let itemHeader4 = document.getElementById('header4')
      switch (true) {
        case (itemHeader1 == itemsForSort):
          sortStudentData(storage, resultOutput, itemHeader1, items)
          break
        case (itemHeader2 == itemsForSort):
          sortFaculty(storage, resultOutput, itemHeader2, items)
          break
        case (itemHeader3 == itemsForSort):
          sortDOB(storage, resultOutput, itemHeader3, items)
          break
        case (itemHeader4 == itemsForSort):
          sortStartDateLeftPart(storage, resultOutput, itemHeader4, items)
          break
      }
    })

  }

  // Сортировка ФИО
  function sortStudentData(storage, resultOutput, itemHeader1, items) {

    if (!itemHeader1.classList.contains('sort-accepted')) {
      storage.sort((a, b) => {
        let a_fullName = `${a.fullName.surname} ${a.fullName.name} ${a.fullName.middleName}`.toLowerCase()
        let b_fullName = `${b.fullName.surname} ${b.fullName.name} ${b.fullName.middleName}`.toLowerCase()

        if (a_fullName < b_fullName)
          return -1
        if (a_fullName > b_fullName)
          return 1

        return 0
      })
      // console.log(storage, "сортировыка?")
      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })

      resultOutput(storage)

      document.querySelectorAll('.header').forEach(function (del) {
        if (del != itemHeader1) {
          del.classList.remove('sort-accepted')
        }
      })
      itemHeader1.classList.add('sort-accepted')

    } else {

      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })
      resultOutput(items)
      itemHeader1.classList.remove('sort-accepted')

    }
  }

  // Сортировка факультета
  function sortFaculty(storage, resultOutput, itemHeader2, items) {

    if (!itemHeader2.classList.contains('sort-accepted')) {
      storage.sort((a, b) => {
        let a_faculty = a.faculty.toLowerCase()
        let b_faculty = b.faculty.toLowerCase()

        if (a_faculty < b_faculty)
          return -1
        if (a_faculty > b_faculty)
          return 1

        return 0
      })
      console.log(storage, "сортировыка?22")
      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })

      resultOutput(storage)

      document.querySelectorAll('.header').forEach(function (del) {
        if (del != itemHeader2) {
          del.classList.remove('sort-accepted')
        }
      })

      itemHeader2.classList.add('sort-accepted')
    } else {

      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })
      resultOutput(items)
      itemHeader2.classList.remove('sort-accepted')

    }
  }


  function sortDOB(storage, resultOutput, itemHeader3, items) {


    if (!itemHeader3.classList.contains('sort-accepted')) {
      storage.sort(function (a, b) {
        let dateA = new Date(a.DOB), dateB = new Date(b.DOB)
        return dateA - dateB //сортировка по возрастающей дате


      })

      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })
      resultOutput(storage)

      document.querySelectorAll('.header').forEach(function (del) {
        if (del != itemHeader3) {
          del.classList.remove('sort-accepted')
        }
      })

      itemHeader3.classList.add('sort-accepted')
    } else {

      document.querySelectorAll('.item').forEach(function (delite) {
        delite.remove()
      })
      resultOutput(items)
      document.querySelectorAll('.header').forEach(function (del) {
        if (del != itemHeader3) {
          del.classList.remove('sort-accepted')
        }
      })
      itemHeader3.classList.remove('sort-accepted')
    }
  }
  // сортировка по дате поступления по начальной дате, а при втором клике по второй
  function sortStartDateLeftPart(storage, resultOutput, itemHeader4, items) {

    switch (true) {
      case (itemHeader4.classList.contains('sort-accepted-start-date-two-part')):

        document.querySelectorAll('.item').forEach(function (delite) {
          delite.remove()
        })
        resultOutput(items)

        document.querySelectorAll('.header').forEach(function (del) {
          if (del != itemHeader4) {
            del.classList.remove('sort-accepted')
          }
        })
        itemHeader4.classList.remove('sort-accepted')
        itemHeader4.classList.remove('sort-accepted-start-date-two-part')
        break
      case (!itemHeader4.classList.contains('sort-accepted')):

        storage.sort((a, b) => {
          // console.log(a.startDate.slice(5, 9))
          return a.startDate.slice(0, 4) - b.startDate.slice(0, 4)
        })
        document.querySelectorAll('.item').forEach(function (delite) {
          delite.remove()
        })
        resultOutput(storage)
        document.querySelectorAll('.header').forEach(function (del) {
          if (del != itemHeader4) {
            del.classList.remove('sort-accepted')
          }
        })

        itemHeader4.classList.add('sort-accepted')

        break
      case (itemHeader4.classList.contains('sort-accepted')):

        storage.sort((a, b) => {
          console.log('2')
          return b.startDate.slice(5, 9) - a.startDate.slice(5, 9)
        })
        document.querySelectorAll('.item').forEach(function (delite) {
          delite.remove()
        })
        resultOutput(storage)

        itemHeader4.classList.add('sort-accepted-start-date-two-part')
        break
    }
  }


  // Фильтр через инпут
  function filterSwitch(inputsSearch, storage, resultOutput) {

    let itemFilter1 = document.getElementById('filter-1')
    let itemFilter2 = document.getElementById('filter-2')
    let itemFilter3 = document.getElementById('filter-3')
    let itemFilter4 = document.getElementById('filter-4')
    switch (true) {
      case (itemFilter1 == inputsSearch):
        filterStudentData(inputsSearch, storage, resultOutput)
        break
      case (itemFilter2 == inputsSearch):
        filterFaculty(inputsSearch, storage, resultOutput)
        break
      case (itemFilter3 == inputsSearch):
        filterDOB(inputsSearch, storage, resultOutput)
        break
      case (itemFilter4 == inputsSearch):
        filterStartDate(inputsSearch, storage, resultOutput)
        break
    }
  }


  // фильтр ФИО
  function filterStudentData(inputsSearch, storage, resultOutput) {
    console.log(storage)

    const filterStudentDataItem = storage.filter(function (item) {
      let studentData = `${item.fullName.surname} ${item.fullName.name} ${item.fullName.middleName}`.toLowerCase()
      return studentData.includes(inputsSearch.value)
    })
    document.querySelectorAll('.item').forEach(function (delite) {
      delite.remove()
    })
    resultOutput(filterStudentDataItem)
  }

  // фильтр Факультета
  function filterFaculty(inputsSearch, storage, resultOutput) {
    console.log(storage)

    const filterStudentDataItem = storage.filter(function (item) {
      let studentData = item.faculty.toLowerCase()
      return studentData.includes(inputsSearch.value)
    })
    document.querySelectorAll('.item').forEach(function (delite) {
      delite.remove()
    })
    resultOutput(filterStudentDataItem)
  }
  // фильтр DOB

  function filterDOB(inputsSearch, storage, resultOutput) {
    console.log(storage)

    const filterStudentDataItem = storage.filter(function (item) {
      let studentData = item.DOB
      return studentData.includes(inputsSearch.value)
    })
    document.querySelectorAll('.item').forEach(function (delite) {
      delite.remove()
    })
    resultOutput(filterStudentDataItem)
  }
  // фильтр StartDate

  function filterStartDate(inputsSearch, storage, resultOutput) {
    console.log(storage)

    const filterStudentDataItem = storage.filter(function (item) {
      let studentData = item.startDate
      return studentData.includes(inputsSearch.value)
    })
    document.querySelectorAll('.item').forEach(function (delite) {
      delite.remove()
    })
    resultOutput(filterStudentDataItem)
  }


  // инициализирую само преложение


  function createHandbookApp(container) {
    // для вывода года
    let outputDate

    const title = "Студенты"

    const defaultArrow = [];

    const items = JSON.parse(localStorage.getItem(title)) || defaultArrow;
    // Дублирую инфу из localStorage
    const storage = items;

    let HandbookFilterInputs = createHandbookFilterInputs()

    let handbookList = createHandbookList()

    let handbookForm = createHandbookForm()
    let firstStudentTitle = createHandbookFirstItem()


    container.append(handbookForm.form)
    container.append(handbookList);
    handbookList.append(HandbookFilterInputs.filterItems);
    handbookList.append(firstStudentTitle.firstItem)

    // создаю дефолтного студента_____________________________________
    if (items === defaultArrow) {

      const testName = {
        fullName: {
          surname: "Пупкин",
          name: "Василий",
          middleName: "Витальевич",
        },
        faculty: "Машиностроение",
        DOB: '09.01.1995',
        startDate: "2005-2009",
        timeStamp: Date.now()
      }

      createDefoultItem(title, testName, items)

    }
    // _______________________________________________________________

    // вывожу элементы из Local Storage_________________________________________________
    let resultOutput = function result(items) {
      fullInfoValues = Object.values(items)
      for (let el of fullInfoValues) {
        let handbookItemAdd = createHandbookItem(el, title)
        handbookList.append(handbookItemAdd.item)
      }
    }

    resultOutput(items)
    // __________________________________________________________________________________


    // создаю студента на клик
    handbookForm.form.addEventListener('submit', function (e) {
      e.preventDefault()
      // Возраст вставляю в скелет для local storage
      let outputsDOBvalue = outputDOB()
      let reverseDOBOutput = outputsDOBvalue.me.reverseDOBOutput();
      outputsDOBvalue = outputsDOBvalue.me.getAge();

      createNewStudent(title, items, handbookForm, handbookList, storage, outputsDOBvalue, reverseDOBOutput, outputDate);
      document.querySelectorAll('.input-value').forEach(function (clearValue) {
        clearValue.value = ''
        clearValue.classList.remove('green')
        handbookForm.button.setAttribute("disabled", "disabled")
      })
    })

    // валидация
    // список реагирует на нажатие клавиши (в данном случае происхлодит валидация)
    document.querySelectorAll('.input-value').forEach(function (valdate) {

      valdate.addEventListener('keyup', function (e) {
        // Делаю заглоавной первую букву
        parseEmployeesData(valdate, handbookForm)
        // высчитываю возраст
        outputDOB()
        // валидация Года обучения
        let outputsDOBvalue = outputDOB()
        calculateStartDate(valdate, outputsDOBvalue)
        checkInputAlert(valdate)
        onButton(handbookForm)

        outputDate = calculateStartDate(valdate, outputsDOBvalue)

      })
    })


    // Сортировка на кнопки
    document.querySelectorAll('.header').forEach(function (itemsForSort) {
      sortSwitch(itemsForSort, storage, resultOutput, title)
    })


    // Сортировка поиска подстроки
    // console.log(document.querySelector('.input-filter'))
    document.querySelectorAll('.input-filter').forEach(function (inputsSearch) {
      inputsSearch.addEventListener('keyup', () => {
        if (inputsSearch.value.length == 0) {
          document.querySelectorAll('.item').forEach(function (delite) {
            delite.remove()
          })
          resultOutput(items)
        } else {

          filterSwitch(inputsSearch, storage, resultOutput)
        }
      })
    })



  }



  window.createHandbookApp = createHandbookApp;

})()
