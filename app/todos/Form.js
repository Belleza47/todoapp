import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react"
import Form from "next/form"

export default function TodoForm({ onSubmit, users }) {
    const options = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.username}
        </option>
    ));
    return <Form action={onSubmit}>
        <Label htmlFor="make">Make</Label>
        <Textarea id="make" name="make" />
        <Label htmlFor="description">Model</Label>
        <Textarea id="model" name="model" />
        <Checkbox id="done" name="done" value="done" />
        <Label htmlFor="done">Done</Label>
        <Label htmlFor="deadlineAt">Year</Label>
        <TextInput type="date" id="deadlineAt" name="deadlineAt" />
        <Label htmlFor="GasolineId">Gasoline</Label>
        <Select id="GasolineId" name="GasolineId" required>
            <options value="">Diesel</options>
            <options value="1">Ethanol</options>
            <options value="2">Biodiesel</options>
            <options value="3">Unleaded</options>
            {options}
        </Select>
        <Button type="submit">Save Todo</Button>
    </Form>
}