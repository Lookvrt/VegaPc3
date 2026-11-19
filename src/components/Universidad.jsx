import { useRequest } from 'alova/client';
import { obtenerLista } from '../api/Instance';
import './Universidad.css'

function Universidad() {
    const {
        loading: cargando,
        data: universidad = [],
        error,
    } = useRequest(obtenerLista);

    if (cargando) {
        return <p className="estado-mensaje estado-cargando">Cargando...</p>;
    }
    if (error) {
        return <p className="estado-mensaje estado-error">Error: {error.message || error}</p>;
    }
    return (
        <table className="catalogo-tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Pais</th>
                        <th>Dominio</th>
                        <th>Pagina Web</th>
                    </tr>
                </thead>
                <tbody>
                    {universidad.slice(0, 30).map((u) => (
                        <tr>
                            <td>{u.name}</td>
                            <td>{u.country}</td>
                            <td>{u.domains}</td>
                            <td>{u.web_pages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default Universidad;