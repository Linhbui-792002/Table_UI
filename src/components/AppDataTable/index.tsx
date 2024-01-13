// components/Table.tsx
import { Movie } from "@src/types";
import React from "react";

interface RenderTableProps {
  movies: Movie[];
}

const TableData: React.FC<RenderTableProps> = ({ movies }) => {
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Year</th>
            <th className="py-2 px-4 border-b">Genre</th>
            <th className="py-2 px-4 border-b">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies?.map((movie) => (
            <tr key={movie._id.$oid} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <img
                  src={movie.img}
                  alt={movie.name}
                  className="w-10 h-14 mr-2 rounded"
                />
                {movie.name}
              </td>
              <td className="py-2 px-4 border-b color-black">{movie.year}</td>
              <td className="py-2 px-4 border-b">{movie.genre.join(", ")}</td>
              <td className="py-2 px-4 border-b">{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
