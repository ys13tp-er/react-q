import React from 'react'
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import request from '../../utils/request'
import { connect } from 'dva';
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                >
                    {children}
                </div>
            );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                        children
                    )}
            </td>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
            },
            {
                title: 'skill',
                dataIndex: 'skill',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a href="/home">Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.state = {
            dataSource: [
                // {
                //     key: '0',
                //     name: 'Edward King 0',
                //     age: '32',
                //     address: 'London, Park Lane no. 0',
                // },
                // {
                //     key: '1',
                //     name: 'Edward King 1',
                //     age: '32',
                //     address: 'London, Park Lane no. 1',
                // },
            ],
            count: 2,
        };
    }

    async componentDidMount() {
        console.log(this)
        let { data } = await request('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/news')
        data = data.map((item, index) => {
            item.key = index
            return item
        })
        this.setState({
            dataSource: data
        })
        console.log(data)
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        this.props.dispatch({
            type: 'products/add',
            payload: ['abc']
        })
        console.log(1)
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                {this.props.products.arr.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
        </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}
// 从model里面获取值并挂载到props上面
export default connect(({ products }) => ({
    products,
}))(EditableTable)
// export default EditableTable