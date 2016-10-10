import React from "react";
import ReactDOM from "react-dom";
import PaginationGenerator from "../../dist";

class PaginationGeneratorEx extends React.PureComponent {
  
  constructor() {
    super();
    this.state = {
      pagination: {}
    };
    this.offset = 0;
    this.limit = 20;
    this.totalCount = 1000;
    this.showCount = 4;
  }

  cache() {
    const pagination = PaginationGenerator(this.offset, this.limit, this.totalCount, this.showCount);
    this.setState({ pagination });
  }

  componentWillMount() {
    this.cache();
  }

  onSubmit() {
    this.offset = parseInt(this.refs.offset.value, 10);
    this.limit = parseInt(this.refs.limit.value, 10);
    this.totalCount = parseInt(this.refs.totalCount.value, 10);
    this.showCount = parseInt(this.refs.showCount.value, 10);
    this.cache();
  }

  onRefresh(offset, e) {
    e.preventDefault();
    this.offset = offset;
    this.cache();
  }

  renderList() {
    const list = [];
    const { pagination } = this.state;

    pagination.pages.map((page, idx) => {
      list.push(
        <li key={ idx }>
          { page.current ? (
            <span className="paging-current-ovr">{ page.pageNum }</span>
          ) : (
            <a onClick={ this.onRefresh.bind(this, page.offset) }
               href="#"
               className="paging-ovr">{ page.pageNum }</a>
          ) }
        </li>
      );
    });

    return (
      <ul>
        { pagination.paging.prev ? (
          <li onClick={ this.onRefresh.bind(this, pagination.paging.prev) }
              className="previous">
            <a href="#" className="fui-arrow-left" />
          </li>
        ) : null }

        { list }

        { pagination.paging.next ? (
          <li onClick={ this.onRefresh.bind(this, pagination.paging.next) }
              className="next">
            <a href="#" className="fui-arrow-right" />
          </li>
        ) : null }
      </ul>
    );
  }
  
  render() {

    const { pagination } = this.state;

    return (
      <div className="container theme-showcase demo-tiles">
        
        <div className="row">
          <header className="page-header">
            <h1>
              <span style={{ verticalAlign: "middle" }}>Pagination DEMO</span>
              <a href="https://github.com/keyiiiii/pagination-generator"
                 className="btn btn-block btn-lg btn-info"
                 target="_blank"
                 style={{ display: "inline", marginLeft: "20px" }}>Source</a>
            </h1>
          </header>

          <section className="col-xs-6">
            <h2 className="demo-section-title">Input Data</h2>
            <div className="login-form">
              <div className="form-group">
                <input type="text"
                       className="form-control login-field"
                       id="offset"
                       defaultValue={ this.offset }
                       ref="offset"/>
                <label className="login-field-icon"
                       htmlFor="offset">offset</label>
              </div>
              <div className="form-group">
                <input type="text"
                       className="form-control login-field"
                       id="limit"
                       ref="limit"
                       defaultValue={ this.limit }/>
                <label className="login-field-icon"
                       htmlFor="limit">limit</label>
              </div>
              <div className="form-group">
                <input type="text"
                       className="form-control login-field"
                       id="totalCount"
                       ref="totalCount"
                       defaultValue={ this.totalCount } />
                <label className="login-field-icon"
                       htmlFor="totalCount">totalCount</label>
              </div>
              <div className="form-group">
                <input type="text"
                       className="form-control login-field"
                       id="showCount"
                       ref="showCount"
                       defaultValue={ this.showCount } />
                <label className="login-field-icon"
                       htmlFor="showCount">showCount</label>
              </div>

              <button className="btn btn-primary btn-lg btn-block"
                      onClick={ this.onSubmit.bind(this) }>Submit</button>
            </div>

          </section>

          <section className="col-xs-6">
            <h2 className="demo-section-title">Result</h2>

            { pagination.paging ? (
              <div className="pagination">
                { this.renderList() }
              </div>
            ) : null}


            { /* Detail */ }
            { pagination.pages ? (
              <h3 className="demo-panel-title">Detail</h3>
            ) : null }

            <ul>
              { pagination.paging.prev ? (
                <li>prev url: ?offset={  pagination.paging.prev }</li>
              ) : null }

              {  pagination.pages.map((page, idx) => {
                return (
                  <li key={ idx }>current: { page.current }, { page.firstNum }〜{ page.secondNum }, url: ?offset={ page.offset }</li>
                );
              }) }

              { pagination.paging.next ? (
                <li>next url: ?offset={ pagination.paging.next }</li>
              ) : null }

            </ul>


            { /* json */ }
            <h3 className="demo-panel-title">JSON</h3>

            <pre style={{ lineHeight: 1.2, background: "#2c3e50", color: "#fff" }}>{ JSON.stringify(pagination, null, "    ") }</pre>
          </section>
        </div>
        
      </div>
    );
  }
}

ReactDOM.render(<PaginationGeneratorEx />, document.getElementById("root"));