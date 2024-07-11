import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@karimACC/app/ui/components/table";
import { cn } from "@karimACC/app/util/common";
import { VOCATION_ID_TO_NAME } from "@karimACC/app/util/vocation";
import { Eye } from "lucide-react";

interface AccountCharacter {
  name: string;
  level: number;
  id: number;
  PlayerOnline: { player_id: number } | null;
  vocation: number;
}

export interface CharactersProps {
  players: AccountCharacter[];
}

export default function CharactersTable({ players }: CharactersProps) {
  const tableHeaderClasses = "w-[100px] font-bold text-slate-950";

  return (
    <div className="p-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={cn(tableHeaderClasses)}>#</TableHead>
            <TableHead className={cn(tableHeaderClasses)}>Name</TableHead>
            <TableHead className={cn(tableHeaderClasses)}>Status</TableHead>
            <TableHead className={cn(tableHeaderClasses)}>Level</TableHead>
            <TableHead className={cn(tableHeaderClasses)}>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, index) => {
            const isOnline = player.PlayerOnline?.player_id;
            return (
              <TableRow key={player.id}>
                <TableCell className="font-medium">{index + 1}.</TableCell>
                <TableCell className="font-medium">
                  {player.name}
                  <p>{VOCATION_ID_TO_NAME[player.vocation]}</p>
                </TableCell>
                <TableCell
                  className={cn(
                    "font-bold",
                    isOnline ? "text-green-500" : "text-red-500"
                  )}
                >
                  {isOnline ? "Online" : "Offline"}
                </TableCell>
                <TableCell>{player.level}</TableCell>
                <TableCell>
                  <Eye />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
