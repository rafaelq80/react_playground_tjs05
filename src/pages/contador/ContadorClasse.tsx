import { Component } from "react";

// Definindo a interface para o estado do componente
interface State {
  contador: number;
}

class ContadorClasse extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Definindo o estado inicial do contador
    this.state = {
      contador: 0,
    };
  }

  // Método para incrementar o contador
  incrementar = (): void => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Componente Contador - Classe</h2>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClasse;
