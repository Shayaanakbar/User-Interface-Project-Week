function openNav() {
    document.querySelector(".dropdown").style.width = "100%";
    document.querySelector(".menu-close").style.display = "block";
    document.querySelector(".menu-expand").style.display = "none";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector(".dropdown").style.width = "0%";
    document.querySelector(".menu-close").style.display = "none";
    document.querySelector(".menu-expand").style.display = "block";
  }



  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab= '${this.data}']`);
      this.tabItem = new tabItem(this.itemElement);
      this.element.addEventListener("click", (e) => { this.select(e); 
    });
  };

  select(e) {
    
    const links = document.querySelectorAll(".tabs-link");

    links.forEach( link => {
      link.classList.remove('tabs-link-selected');
    });

    this.element.classList.add("tabs-link-selected");

    this.tabItem.select();


  }
  };
  class tabItem {
    constructor(element) {
      this.element = element;
    }

    select() {


      const items = document.querySelectorAll(".tabs-item");

      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })


      this.element.classList.add('tabs-item-selected');
    }
  }


  links = document.querySelectorAll(".tabs-link");
  links.forEach(function (link) {
    return new TabLink(link)
  });


