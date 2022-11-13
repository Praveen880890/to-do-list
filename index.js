const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    const od = [];
    all.forEach((element) => {
      if (element.dueDate == yesterday) {
        od.push(element);
      }
    });
    return od;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    const dt = [];
    all.forEach((element) => {
      if (element.dueDate == today) {
        dt.push(element);
      }
    });
    return dt;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    const dl = [];
    all.forEach((element) => {
      if (element.dueDate == tomorrow) {
        dl.push(element);
      }
    });
    return dl;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    const dsl = [];
    list.forEach((e) => {
      const a = " ";
      if (e.dueDate === today) {
        if (e.completed === true) {
          const a = "[x] " + e.title;
          dsl.push(a);
        } else {
          const a = "[ ] " + e.title;
          dsl.push(a);
        }
      } else {
        if (e.completed === true) {
          const a = "[x] " + e.title + " " + e.dueDate;
          dsl.push(a);
        } else {
          const a = "[ ] " + e.title + " " + e.dueDate;
          dsl.push(a);
        }
      }
    });
    let g = "";
    for (let i = 0; i < dsl.length; i++) {
      e = dsl[i];
      if (i === 0) {
        g = g + e;
      } else {
        g = g + "\n" + e;
      }
    }
    return g;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ###################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ############## #
module.exports = todoList;
