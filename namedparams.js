// function render(header, body, footer) {}

// render("header", "footer", "body");

function render({ header, footer, body = "n/a" }) {
  //const { header, footer, body = "n/a" } = config;
  console.log(header, footer, body);
}

render({ header: "header", footer: "footer", body: "body" });
