export const Form = () => {
  return (
    <div className="container p-5">
      {/* form heading */}
      <h2 className="text-center p-2">
        Please leave your details below for contact purposes
      </h2>
      <hr />
      {/* form for contact */}
      <form action="">
        <div className="row g-3 p-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row g-3 p-2">
          <div className="col-md">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="row g-3 p-2">
          <div className="col-md">
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone"
              required
            />
          </div>
        </div>

        <div className="row g-3 p-2">
          <div className="col-md">
            <textarea
              className="form-control"
              id="message-box"
              placeholder="Please type your message here..."
            />
          </div>
        </div>
        <div className="row g-3 p-2">
          <div className="col-md text-center">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
