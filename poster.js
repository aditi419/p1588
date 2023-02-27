AFRAME.registerComponent('comics-posters', {
    init: function(){
        this.placesContainer = this.el;
        this.createPosters();
    },

    createPosters: function(){
        const posters = [
        {
            id: 'superman',
            title: 'Superman',
            url: './Posters/superman-poster.jpeg',
        },
        {
            id: 'spiderman',
            title: 'Spiderman',
            url: './Posters/spiderman-poster.jpeg',
        },
        {
            id: 'captainAmerica',
            title: 'Captain America',
            url: './Posters/captain-america.jpeg',
        },
        {
            id: 'outerSpace',
            title: 'Outer Space',
            url: './Posters/outer-space.jpeg',
        },
    ];
    let previousXPosition = -60;
    for (var item of posters) {
        const posX = previousXPosition + 25;
        const posY = 5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        radiusInner: 20,
        radiusOuter: 40,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
      });
  
      return entityEl;
    },
  
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 25,
        height: 20
      });
      entityEl.setAttribute("material", { src: item.url });
      entityEl.setAttribute('position', {x:0, y:5, z:0.1});
      return entityEl;
    },
  });