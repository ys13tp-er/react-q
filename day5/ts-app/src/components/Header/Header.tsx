import React, { Component } from 'react';
// props
interface Props {
    skill: number[]
}
// state Object
interface State {
    name: string,
    age?: number
}

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: 'yao',
            age: 18,
        }
    }
    add(num: number): string {
        let num2: string = '18'
        return this.state.age + this.state.name + num + num2
    }
    test(name: string): void {
        let obj: State = {
            name: name,
        }
        this.setState(obj)
    }
    render() {
        return (
            <div>Helle world</div>
        )
    }
}

export default Header